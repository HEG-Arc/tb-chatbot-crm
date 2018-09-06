/**
* Copyright 2016 IBM Corp. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var mysql = require('mysql');

// Configuration connexion à la base de données mySQL
var con  = mysql.createPool({
  connectionLimit : 10,
  host: process.env.SQL_host,
  user: process.env.SQL_user,
  password: process.env.SQL_password
});


var Botkit = require('botkit');

// le canal de communication utilisé dans ce projet est Skype (Microsoft Bot framework)
var controller = Botkit.botframeworkbot({
});

//Configuration de l'autentification
var bot = controller.spawn({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

//A la reception de n'importe quel message
controller.hears(['.*'], 'message_received', function(bot, message) {

  // S'il y a une erreur avec la plateforme IBM Watson
  if (message.watsonError) {
    console.log(message.watsonError);
    bot.reply(message, 'Hum je pense que quelque chose ne fonctionne plus correctement chez moi. Contact mon docteur pour me soigner au plus vite \n\n\u200C Tel: 079 430 68 34 \n\n\u200C Email: j.charlet@rollomatic.ch ');
  }

  // si il y a un un retour d'information de la part de IBM Watson
  else if (message.watsonData && 'output' in message.watsonData) {

    // si watson a reconnu une intention dans la phrase alors traitement de la demande
    if (message.watsonData.intents.length>0){

      // le traitement des informations retourné par watson est effectué dans la fonction traitementIntent()
      traitementIntent(message)
    }

    // si Watson n'a pas détécté d'intention de la part de l'utilisateur, répondre que la phrase n'a pas été comprise
    else {
      bot.reply(message, "Aoutch, je n'ai malheureusement pas compris ta phrase... Est ce que tu pourrais reformuler différement?")
    }

  }

  //si il y a une erreur technique
  else {
    console.log('Error: received message in unknown format. (Is your connection with Watson Conversation up and running?)');
    bot.reply(message, 'I\'m sorry, but for technical reasons I can\'t respond to your message');
  }
});

// déclaratin des varaiables
var msgrep = '';
var userId ='';
var intent = '';
var entities = '';
var msgUser = '';
var context = '';
var skypeId = '';
var userName = '';

// fonction qui va traiter le retour effectué par la plateforme IBM Watson
function traitementIntent(message){

  // Affectation de certaines valeurs retournées par IBM Watson dans des vraiables pour faciliter leurs utilisations dans le code
  var intent = message.watsonData.intents[0].intent;
  var entities = message.watsonData.entities;
  var msgUser = message.watsonData.input.text;
  var context = message.watsonData.context;
  var skypeId = message.address.user.id;
  var userName = message.address.user.name;

  // Affichage dans la console de toutes les informations après traitement, à décommenter lors de developpement ou de phase de debug
  /*
  console.log('    ');
  console.log('-------------------------------');
  console.log('    ');
  console.log('-- MESSAGE --');
  console.log(msgUser);
  console.log('    ');
  console.log('-- INTENT --');
  console.log(intent);
  console.log('    ');
  console.log('-- ENTITIES --');
  console.log(entities);
  console.log('    ');
  console.log('-- CONTEXTES --');
  console.log(context);
  console.log('    ');
  console.log('-------------------------------');
  console.log('    ');
  */

  // --- Vérification que l'utilisateur soit connu et approuvé

  // l'enregistrement dans la base de données de l'utilisateur est identifié par son Skype ID
  var sqlbase="SELECT iduserCB, isApproved FROM crm.usercb where skypeCode='"+skypeId+"'";

  con.query(sqlbase, function (err, result, fields) {

    // Si il y a une erreur SQL
    if (err){
      logErr(err);
      // envoie de la réponse à l'utilisateur
      rep(message,'Hey joues pas au plus malin avec moi!...');
    }

    // Si l'utilsateur utilise le chat bot pour la première fois aucune entrée n'est existante dans la base de donnée
    else if (result.length == 0){
      // envoie de la réponse à l'utilisateur
      rep(message,'Hello '+userName+', je n\'ai pas la chance de te connaitre et on m\'a dit de ne jamais parler aux inconnus. \n\n\u200CSi tu as vraiment envie de parler avec moi, prends contact avec Jonathan pour qu\'il puisse faire les présentations. \n\n\u200C Tel: 079 430 68 34 \n\n\u200C Email: j.charlet@rollomatic.ch ');

      // Lors de la première interaction entre le chat bot et un nouvel utilisateur ses informations d'authentification sont enregistrée dans la base de donnée
      var sqlInsert="INSERT INTO crm.usercb (username,skypeCode) VALUES ('"+userName+"','"+skypeId+"');";
      con.query(sqlInsert, function (err, result, fields) {
        if (err){
          logErr(err);
        }
      });
    }

    // Si l'utilisateur est déjà enregistré dans la base de donnée mais n'est pas encore authorisé à utilise toutes les fonctionnalités de dialogue
    else if(result[0].isApproved==0){
      // envoie de la réponse à l'utilisateur
      rep(message,'Hello '+userName+', je n\'ai toujours pas la chance de te connaitre...\n\n\u200CJ\'ai noté ta demande et j\attends que Jonathan Charlet fasse les présentations. Fait accélérer le processus et demande directement à Jonathan pour qu\'il puisse faire les présentations. \n\n\u200CTel: 079 430 68 34 \n\n\u200C Email: j.charlet@rollomatic.ch ');
    }

    // Si l'utilisateur est approuvé alors le reste du dialogue peut être accédé
    else if(result[0].isApproved==1){
      userId=JSON.stringify(result[0].iduserCB);

      // les traitements sont effectué en fonction de l'intention détecté par la plateforme IBM Watson
      switch (intent) {

        //--- Intent Hello
        case 'Hello':
        // envoie de la réponse à l'utilisateur
        rep(message,'Hey salut ' + userName + '! Que puis-je faire pour toi? :) ');
        break;

        //--- Intent Aurevoir
        case 'Byebye':
        // envoie de la réponse à l'utilisateur
        rep(message,'Bye bye et n\'hésites pas à refaire appel à mes services dès que tu en as besoins :)');
        break;

        //--- Intent Possibilité du chat bot
        case 'Possibilites_ChatBot':
        var msgrep="Je me présente, CRMWatson. Je suis l'assistant que tu as toujours rêvé d'avoir! \n\n\u200C";
        msgrep = msgrep + "Je peux accéder aux informations d'entreprises, leurs contacts, leurs parcs machines, leurs événements et les offres effectuées chez ce client. \n\n\u200C";
        msgrep = msgrep + "Je suis également capable de te donner ton agenda par rapport aux événements que tu as planifié dans le CRM. \n\n\u200C  \n\n\u200C";
        msgrep = msgrep + "Voilà quelques exemples de questions auxquelles je suis capable de répondre: \n\n\u200C";
        msgrep = msgrep + "<b>•</b> Affiche moi la liste des clients A \n\n\u200C";
        msgrep = msgrep + "<b>•</b> Affiche moi la liste des clients A et des clients B \n\n\u200C";
        msgrep = msgrep + "<b>•</b> Quel est mon agenda ? \n\n\u200C";
        msgrep = msgrep + "<b>•</b> Quelles est sont les offres en cours? \n\n\u200C\n\n\u200C";
        msgrep = msgrep + "Et encore pleins d'autres! :) ";
        rep(message,msgrep);
        break;

        //--- Intent lister les entreprises
        case 'liste_entreprise' :
        var sql='';

        // s'il n'y a pas de critère
        if (entities.length==0){
          sql="select c.name, r.value from crm.company c left join crm.rating r on c.rating_idrating=r.idrating";
        }

        // sinon avec les critères
        else {
          // avec le premier crtères
          sql="SELECT  c.name, r.value  FROM crm.company c left join crm.rating r on c.rating_idrating=r.idrating where r.value='"+entities[0].value+"'";
          // s'il y a plus d'un crtitère
          if(entities.length>1){
            for (var i = 1; i<entities.length ;i++) {
              sql=sql+"or r.value='"+entities[i].value+"'";
            }
          }
        }

        // execution SQL
        con.query(sql, function (err, result, fields) {
          msgrep='';

          // s'il y a une erreur de synthax SQL (arrive principalement si l'utilisateur essaie de duper le chat bot)
          if (err){
            // Loguer l'erreur
            logErr(err);
            // informer l'utilisateur que sa requête n'a pas abouti
            msgrep="Hey joues pas au plus malin avec moi!...";
          }

          // Si la requête SQL renvoie 0 tuples
          else if (result.length == 0){
            msgrep="Je n'ai rien trouvé correspondant a ta recherche";
          }

          else {
            // message "d'intro"
            msgrep=msgrep +'Voilà la liste des sociétés que j\'ai trouvé: \n\n\u200C';
            // boucle pour chaque tuple trouvé
            for (var i = 0; i<result.length ;i++) {
              msgrep=msgrep + "<b>• " + result[i].name + "</b> - "+ result[i].value +"\n\n\u200C";
            }
            // message de fin qui invite a continuer le dialogue
            msgrep=msgrep +"\n\n\u200C Si tu veux plus de détail sur une entreprise écris moi son nom";
          }

          // envoie de la réponse à l'utilisateur
          rep(message, msgrep);

        });
        break;

        //--- Intent détail d'une entreprise
        case 'Information_entreprise':
        var sql='';

        // Si aucune entreprise n'est spéficié dans la demande
        if (entities.length==0){
          msgrep="Peux-tu s'il te plait reformuler, je n'arrive pas à comprendre ";
        }

        // Si deux entreprises sont spécifié. L'affichage est limité à un seul resultat
        else if (entities.length>1){
          msgrep="Désolé mais je suis limité à l'affichage d'une seule entreprise à la fois. Peux tu reformuler ta question mais cette fois avec une seule entreprise.";
        }

        // Sinon la recherche est effectuée
        else{
          sql="SELECT (select  COALESCE(sum(rollo.quantity), 0) from crm.machine_has_company as rollo join crm.company as c on c.idcompany=rollo.company_idcompany where c.name='"+entities[0].value+"') nbRollo,(select  COALESCE(sum(comp.quantity), 0) from crm.company_has_machinecompetitor as comp join crm.company as c on c.idcompany=comp.company_idcompany where c.name='"+entities[0].value+"') nbComp, (select COALESCE(count(of.idoffer), 0) from crm.offer as of join crm.company as c on  c.idcompany=of.company_idcompany join crm.status as s on s.idstatus=of.status_idstatus where c.name='"+entities[0].value+"' and s.value='In progress') nbOffer,(select COALESCE(count(ev.idevent), 0) from crm.event as ev join crm.company as c on c.idcompany=ev.company_idcompany where c.name='"+entities[0].value+"' and ev.date>SYSDATE()) nbEvent, c.name, c.npa, c.city, r.value FROM crm.company as c left join crm.rating as r on c.rating_idrating=r.idrating where c.name='"+entities[0].value+"';";
          con.query(sql, function (err, result, fields) {

            // S'il y a une erreur sql
            if (err){
              logErr(err);
              msgrep="Hey joues pas au plus malin avec moi!...";
            }

            // Si aucun tuple n'est trouvé
            else if (result.length == 0){
              msgrep="Je n'ai rien trouvé correspondant a ta recherche";
            }

            // Sinon, les informations demandées sont trouvée une réponse est composée
            else {
              msgrep = 'La société <b>' + result[0].name + '('+result[0].value+')' +'</b> située à '+ result[0].npa  + ' ' + result[0].city;
              msgrep = msgrep + '\n\n\u200C'; // retour à la ligne
              msgrep = msgrep + 'Le parc machine Rollomatic est composé de <b>' + result[0].nbRollo + ' </b>machines';
              msgrep = msgrep + "\n\n\u200C";
              msgrep = msgrep + 'Le parc machine competiteur est composé de <b>' + result[0].nbComp + ' </b>machines';
              msgrep = msgrep + '\n\n\u200C';
              msgrep = msgrep + 'Il y a actuellement de planifié avec le client <b>' + result[0].nbEvent + ' </b>événements';
              msgrep = msgrep + '\n\n\u200C';
              msgrep = msgrep + 'Il y a <b>' + result[0].nbOffer + ' </b>offres en cours de négociation';
              msgrep = msgrep + '\n\n\u200C\n\n\u200C';
              msgrep = msgrep + 'Est-ce que tu as besoins de plus d\'information sur cette société?';
            }

            // envoie de la réponse à l'utilisateur
            rep(message, msgrep);
          });
        }
        break;

        //--- Intent lister les contacts
        case 'Liste_contacts':
        sql="SELECT comp.name compName, f.name function, c.firstname, c.lastname FROM crm.contact as c join crm.function as f on c.function_idfunction=f.idfunction join crm.company as comp on comp.idcompany= c.company_idcompany where comp.name='"+context.currentCompany+"';";

        con.query(sql, function (err, result, fields) {

          // S'il y a une erreur sql
          if (err){
            logErr(err);
            msgrep="Hey joues pas au plus malin avec moi!...";
          }

          // Si aucun tuple n'est trouvé
          else if (result.length == 0){
            msgrep="Je n\'ai pas trouvé de contact";
          }

          // Si les informations demandées sont trouvées une réponse est composée
          else {
            msgrep="Voilà les contacts de la société <b>" + result[0].compName +"</b>";
            msgrep = msgrep + '\n\n\u200C';

            // boucle pour chaque tuple trouvé
            for (var i = 0; i<result.length ;i++) {
              msgrep=msgrep +"<b>"+result[i].firstname + " "+ result[i].lastname +"</b>, "+ result[i].function +"\n\n\u200C";
            }

            msgrep=msgrep +"Est-ce que tu as besoins de plus d\'information sur un contact?";
          }

          // envoie de la réponse à l'utilisateur
          rep(message, msgrep);

        });
        break;

        //--- Intent détail d'un contact
        case 'Details_contact':
        var sql=''

        // Si aucune information permettant de récupérer le contact n'est spécifié
        if(entities.length==0){
          rep(message,'hum je n\'ai pas bien compris de quel contact tu veux le détail');
        }

        // sinon la recherche des détails du contact peut être effectué
        else{

          // Si le type d'entité est le nom d'un contact
          if(entities[0].entity=='contact'){
            sql="SELECT comp.name societe, f.name function, c.firstname, c.lastname, c.email, c.telephone FROM crm.contact as c join crm.function as f on c.function_idfunction=f.idfunction join crm.company as comp on comp.idcompany= c.company_idcompany where comp.name='"+context.currentCompany+"' and c.firstname='"+entities[0].value+"';";
          }

          // Si le type d'entité est la fonction du contact
          else if (entities[0].entity=='functionContact'){
            sql="SELECT comp.name societe, f.name function, c.firstname, c.lastname, c.email, c.telephone FROM crm.contact as c join crm.function as f on c.function_idfunction=f.idfunction join crm.company as comp on comp.idcompany= c.company_idcompany where comp.name='"+context.currentCompany+"' and f.name='"+entities[0].value+"';";
          }

          // Sinon --> au cas où un type d'entité non géré dans ce cas est demandé
          else{
            // envoie de la réponse à l'utilisateur
            rep(message, 'oups je me suis perdu... Est ce que tu peux recommencer ta demande depuis le début s\'il te plait?');
          }

          con.query(sql, function (err, result, fields) {
            // S'il y a une erreur sql
            if (err){
              logErr(err);
              msgrep="Hey joues pas au plus malin avec moi!...";
            }

            // Si aucun tuple n'est trouvé
            else if (result.length == 0){
              msgrep="Je n'ai trouvé aucun contact correspondant a ta demande";
            }

            // Sinon, les informations demandées sont trouvées et une réponse est composée
            else {
              msgrep="Voilà les détails du contact demandé : ";
              msgrep = msgrep + '\n\n\u200C';

              // boucle pour chaque tuple trouvé
              for (var i = 0; i<result.length ;i++) {
                msgrep=msgrep + "<b>" + result[i].firstname + " "+ result[i].lastname +", "+ result[i].function +"</b> \n\n\u200C";
                msgrep=msgrep + "email: <b>" + result[i].email  +"</b> \n\n\u200C";
                msgrep=msgrep + "telephone: <b>" + result[i].telephone  +"</b> \n\n\u200C";
              }

            }

            // envoie de la réponse à l'utilisateur
            rep(message, msgrep);
          });
        }
        break;

        //--- Intent liste des offres
        case 'Liste_Offres':
        sql="SELECT o.idoffer, c.name company, o.title, DATE_FORMAT(o.date,'%y/%m/%d') date, s.value status, m.name machine, m.price, ohs.quantity, o.discount, (m.price * quantity - discount) finalPrice FROM crm.offer as o join crm.status as s on o.status_idstatus=s.idstatus join crm.company as c on c.idcompany=o.company_idcompany join crm.offer_has_machine as ohs on ohs.offer_idoffer=o.idoffer join crm.machine as m on ohs.machine_idmachine=m.idmachine where c.name='"+context.currentCompany+"' order by o.date desc;";

        con.query(sql, function (err, result, fields) {
          // S'il y a une erreur sql
          if (err){
            logErr(err);
            msgrep="Hey joues pas au plus malin avec moi!...";
          }

          // Si aucun tuple n'est trouvé
          else if (result.length == 0){
            msgrep="Je n'ai trouvé aucune offre";
          }

          // Sinon, les informations demandées sont trouvées et une réponse est composée
          else {
            msgrep="Voilà les offres trouvées : ";
            msgrep = msgrep + '\n\n\u200C';

            // boucle pour chaque tuple trouvé
            for (var i = 0; i<result.length ;i++) {
              msgrep=msgrep + "<b>" + result[i].idoffer + ") " + result[i].date + " - "+ result[i].title +", "+result[i].quantity+"x "+ result[i].machine +", "+ result[i].status +"</b>\n\n\u200C";
            }

            msgrep = msgrep + '\n\n\u200C';
            msgrep = msgrep + 'Si tu veux plus de détail sur une offre, écris moi son numéro';
          }

          // envoie de la réponse à l'utilisateur
          rep(message, msgrep);
        });
        break;

        //--- Intent lister les événements
        case 'Liste_Events':
        sql="SELECT DATE_FORMAT(e.date,'%y/%m/%d') date, e.idevent, e.title, e.decription, t.value type, c.name company FROM crm.event as e join crm.type as t on t.idtype=e.type_idtype join crm.company as c on c.idcompany=e.company_idcompany where c.name='"+context.currentCompany+"' order by e.date desc;";

        con.query(sql, function (err, result, fields) {
          // S'il y a une erreur sql
          if (err){
            logErr(err);
            msgrep="Hey joues pas au plus malin avec moi!...";
          }

          // Si aucun tuple n'est trouvé
          else if (result.length == 0){
            msgrep="Je n'ai trouvé aucun événement";
          }

          // Sinon, les informations demandées sont trouvées et une réponse est composée
          else {
            msgrep="Voilà les événements trouvés : ";
            msgrep = msgrep + '\n\n\u200C';

            // boucle pour chaque tuple trouvé
            for (var i = 0; i<result.length ;i++) {
              msgrep=msgrep + "<b>" +  result[i].idevent + " : " + result[i].date + " - "+ result[i].title +", "+result[i].type +"</b>\n\n\u200C";
            }

            msgrep=msgrep +'\n\n\u200CSi tu veux plus de détail sur un événement, écris moi son numéro';
          }

          // envoie de la réponse à l'utilisateur
          rep(message, msgrep);
        });
        break;

        //--- Intent Parc machine
        case 'Parc_machines':
        sql="SELECT 'Rollomatic' fab ,c.name company, mr.name machine, jmr.quantity  FROM crm.company as c join crm.machine_has_company as jmr on c.idcompany=jmr.company_idcompany join crm.machine as mr on jmr.machine_idmachine=mr.idmachine where c.name='"+context.currentCompany+"' UNION SELECT compet.name, c.name company, mc.name, jmc.quantity  from crm.company as c join crm.company_has_machinecompetitor as jmc on jmc.company_idcompany=c.idcompany join crm.machinecompetitor as mc on jmc.machineCompetitor_idmachineCompetitor=mc.idmachineCompetitor join crm.competitor as compet on compet.idCompetitor=mc.Competitor_idCompetitor where c.name='"+context.currentCompany+"' order by fab asc";

        con.query(sql, function (err, result, fields) {
          // S'il y a une erreur sql
          if (err){
            logErr(err);
            msgrep="Hey joues pas au plus malin avec moi!...";
          }

          // Si aucun tuple n'est trouvé
          else if (result.length == 0){
            msgrep="Je n'ai aucune information concernant le parc machine de cette entreprise";
          }

          // Sinon, les informations demandées sont trouvées et une réponse est composée
          else {
            msgrep="Voilà le parc machine de ce client : \n\n\u200C \n\n\u200C";
            msgrep = msgrep + 'Parc machines Rollomatic:\n\n\u200C';

            // boucle pour chaque tuple trouvé
            for (var i = 0; i<result.length ;i++) {
              // Filtrer les résultats Rollomatic
              if(result[i].fab=='Rollomatic'){
                msgrep=msgrep + "<b>" +   result[i].quantity + "x " + result[i].machine + "</b> \n\n\u200C";
              }
            }

            msgrep = msgrep + ' \n\n\u200C';
            msgrep = msgrep + 'Parc machines concurrentes:\n\n\u200C';

            // boucle pour chaque tuple trouvé
            for (var i = 0; i<result.length ;i++) {
              // Filtrer les résultats non Rollomatic
              if(result[i].fab!='Rollomatic'){
                msgrep=msgrep + "<b>"  +  result[i].fab+" : "+ result[i].quantity + "x " + result[i].machine + "</b> \n\n\u200C";
              }
            }
          }

          // envoie de la réponse à l'utilisateur
          rep(message, msgrep);
        });
        break;

        //--- Intent Adresse
        case 'Adresse':
        sql="SELECT name, city, street, npa, country FROM crm.company where name='"+context.currentCompany+"';";

        con.query(sql, function (err, result, fields) {
          // S'il y a une erreur sql
          if (err){
            logErr(err);
            msgrep="Hey joues pas au plus malin avec moi!...";
          }

          // Si aucun tuple n'est trouvé
          else if (result.length == 0){
            msgrep="Je n'ai aucune information concernant l'adresse de cette entreprise";
          }

          // Sinon, les informations demandées sont trouvées et une réponse est composée
          else {
            msgrep="Voilà l'adresse de cette société : \n\n\u200C";

            // boucle pour chaque tuple trouvé
            for (var i = 0; i<result.length ;i++) {
              msgrep=msgrep + "<b>" +  result[i].name+ " \n\n\u200C";
              msgrep=msgrep +  result[i].street+ " \n\n\u200C";
              msgrep=msgrep +  result[i].npa + " " + result[i].city + " \n\n\u200C";
              msgrep=msgrep +  result[i].country + "</b> \n\n\u200C";
            }

          }

          // envoie de la réponse à l'utilisateur
          rep(message, msgrep);
        });
        break;

        //--- Intent Offres en cours
        case 'OffresEnCours':
        sql="SELECT o.idoffer, c.name company, DATE_FORMAT(o.date,'%y/%m/%d') date, o.title FROM crm.offer as o join crm.company as c on c.idcompany=o.company_idcompany join crm.status as s on s.idstatus=o.status_idstatus where s.value='In progress';";

        con.query(sql, function (err, result, fields) {
          // S'il y a une erreur sql
          if (err){
            logErr(err);
            msgrep="Hey joues pas au plus malin avec moi!...";
          }

          // Si aucun tuple n'est trouvé
          else if (result.length == 0){
            msgrep="Je n'ai aucune offre en cours";
          }

          // Sinon, les informations demandées sont trouvées et une réponse est composée
          else {
            msgrep="Voilà les offres actuellement en cours de négociation: \n\n\u200C";

            // boucle pour chaque tuple trouvé
            for (var i = 0; i<result.length ;i++) {
              msgrep=msgrep +"<b>"+ result[i].idoffer+ ") "+result[i].company+", "+ result[i].title +"( "+result[i].date +" ) </b> \n\n\u200C \n\n\u200C";
              msgrep=msgrep + "Si tu veux plus de détail sur une offre, écris moi son numéro";
            }

          }

          // envoie de la réponse à l'utilisateur
          rep(message, msgrep);
        });
        break;

        //--- Intent planning
        case 'Planning':

        // s'il n'y a pas de critère de filtre
        if (entities.length==0){
          sql="  SELECT DATE_FORMAT(e.date,'%y/%m/%d') date, e.idevent, e.title, e.decription, t.value type, c.name company FROM crm.event as e join crm.type as t on t.idtype=e.type_idtype join crm.company as c on c.idcompany=e.company_idcompany where  e.date>SYSDATE() order by e.date asc;"
        }

        // s'il y a un critère de filtre
        else if (entities.length>=1){
          sql="  SELECT DATE_FORMAT(e.date,'%y/%m/%d') date, e.idevent, e.title, e.decription, t.value type, c.name company FROM crm.event as e join crm.type as t on t.idtype=e.type_idtype join crm.company as c on c.idcompany=e.company_idcompany where t.value='"+entities[0].value+"' and e.date>SYSDATE() order by e.date asc;"
        }

        con.query(sql, function (err, result, fields) {
          // S'il y a une erreur sql
          if (err){
            logErr(err);
            msgrep="Hey joues pas au plus malin avec moi!...";
          }

          // Si aucun tuple n'est trouvé
          else if (result.length == 0){
            msgrep="Je n'ai rien au planning prochainement";
          }

          // Sinon, les informations demandées sont trouvées et une réponse est composée
          else {
            msgrep="Voilà les événements planifiés : \n\n\u200C \n\n\u200C";

            // boucle pour chaque tuple trouvé
            for (var i = 0; i<result.length ;i++) {
              msgrep=msgrep + "<b>"+  result[i].idevent+ ")"+   result[i].date+ " - "+result[i].company+", "+ result[i].title + " ("+ result[i].type +")</b>  \n\n\u200C";
            }
            msgrep=msgrep + "\n\n\u200CSi tu veux plus de détail sur un événement, écris moi son numéro";
          }

          // envoie de la réponse à l'utilisateur
          rep(message, msgrep);
        });
        break;

        //--- Intent reponse courte
        case 'reponseCourte':

        // envoie de la réponse à l'utilisateur
        rep(message,'je t\'écoutes');
        break;

        //--- Intent lors d'un nombre
        case 'Nombre':

        // si le noeud courant du dialogue concerne la demande de détail d'une offre
        if(context.currentNode=='detailOffre'){
          var sql= "SELECT o.idoffer, o.comments, c.name company, o.title, DATE_FORMAT(o.date,'%y/%m/%d') date, s.value status, m.name machine, m.price, ohs.quantity, o.discount, (m.price * quantity) totalPrice, (m.price * quantity - discount) finalPrice FROM crm.offer as o join crm.status as s on o.status_idstatus=s.idstatus join crm.company as c on c.idcompany=o.company_idcompany join crm.offer_has_machine as ohs on ohs.offer_idoffer=o.idoffer join crm.machine as m on ohs.machine_idmachine=m.idmachine where o.idoffer='"+entities[0].value+"' order by o.date desc;";

          con.query(sql, function (err, result, fields) {

            // S'il y a une erreur sql
            if (err){
              logErr(err);
              msgrep="Hey joues pas au plus malin avec moi!...";
            }

            // Si aucun tuple n'est trouvé
            else if (result.length == 0){
              msgrep="Je n'ai trouvé aucune offre correspondant a cet ID";
            }

            // Sinon, les informations demandées sont trouvées et une réponse est composée
            else {
              msgrep="Voilà le détail de l'offre demandée: ";
              msgrep = msgrep + '\n\n\u200C';

              // boucle pour chaque tuple trouvé
              for (var i = 0; i<result.length ;i++) {
                msgrep=msgrep + "<b>" +result[i].title +", "+result[i].quantity+"x "+ result[i].machine +"</b>\n\n\u200C \n\n\u200C";
                msgrep=msgrep + "Status: <b>"+result[i].status+"</b>\n\n\u200C";
                msgrep=msgrep + "comments: <b>"+result[i].comments+"</b>\n\n\u200C";
                msgrep=msgrep + "machine: <b>"+result[i].machine+", "+result[i].quantity+"x</b> \n\n\u200C  \n\n\u200C";
                msgrep=msgrep + "Price: <b>"+result[i].totalPrice+"</b>\n\n\u200C";
                msgrep=msgrep + "Discount: <b>-"+result[i].discount+"</b>\n\n\u200C";
                msgrep=msgrep + "Final price: <b>"+result[i].finalPrice+"</b>\n\n\u200C";
              }
            }

            // envoie de la réponse à l'utilisateur
            rep(message, msgrep);
          });

        }

        // si le noeud courant du dialogue concerne la demande de détail d'une offre
        else if(context.currentNode=='detailEvent'){
          var sql= "SELECT DATE_FORMAT(e.date,'%y/%m/%d') date, e.idevent, e.title, e.decription, t.value type, c.name company FROM crm.event as e join crm.type as t on t.idtype=e.type_idtype join crm.company as c on c.idcompany=e.company_idcompany where e.idevent='"+entities[0].value+"' order by e.date desc;";

          con.query(sql, function (err, result, fields) {

            // S'il y a une erreur sql
            if (err){
              logErr(err);
              msgrep="Hey joues pas au plus malin avec moi!...";
            }

            // Si aucun tuple n'est trouvé
            else if (result.length == 0){
              msgrep="Je n'ai trouvé aucun event correspondant a cet ID";
            }

            // Sinon, les informations demandées sont trouvées et une réponse est composée
            else {
              msgrep="Voilà le détail de l'événement demandé: ";
              msgrep = msgrep + '\n\n\u200C';

              // boucle pour chaque tuple trouvé
              for (var i = 0; i<result.length ;i++) {
                msgrep=msgrep + "<b>" +result[i].title +", "+result[i].date +"</b>\n\n\u200C \n\n\u200C";
                msgrep=msgrep + "Company: <b>"+result[i].company+"</b>\n\n\u200C";
                msgrep=msgrep + "Type: <b>"+result[i].type+"</b>\n\n\u200C \n\n\u200C";
                msgrep=msgrep + "Description: <b>"+result[i].decription+"</b>\n\n\u200C  \n\n\u200C";
              }
            }

            // envoie de la réponse à l'utilisateur
            rep(message, msgrep);
          });
        }

        // Sinon, dans le cas où le noeud courant n'est pas géré une réponse est composée
        else{
          // envoie de la réponse à l'utilisateur
          rep(message,'Excuses moi j\'ai perdu le fil de la conversation. Peux-tu stp me recommencer ta demande');
        }
        break;

        //--- Intent politesse
        case 'Politesse':
        // envoie de la réponse à l'utilisateur
        rep(message, 'Avec plaisir :)');
        break;

        //--- Sinon dans le cas où l'intent revoyé n'est pas géré
        default:
        logErr("Intent non supporté");
        // envoie de la réponse à l'utilisateur
        rep(message,'Hum c\'est embarrassant... j\'ai fait une erreur quelque part. Désolé mais je vais devoir reprendre ta demande depuis le début');
      }
      // fin SWITCH
    }
    // fin else si l'utilisateur est aprouvé et connu


  });
  // fin con.query initaile de recupéaration d'utilisateur CRM

  // fonction qui renvoie la réponse à l'utilisateur
  function rep(message, txtmsg){
    bot.reply(message, txtmsg);
    // chaque réponse est enregistrée et journalisée
    logConv(txtmsg);
  }

  // fonction qui va permettre d'enregistrer les informations de logs
  function logConv(rep){

    // éviter des erreurs SQL en surpprimant les caractètes d'échappement
    rep=rep.replace(/'/g, " ");

    // Récupérer les valeurs textes des JSON pour l'enregistrement
    msgUser=JSON.stringify(msgUser);
    intent=JSON.stringify(intent);
    entities=JSON.stringify(entities);
    context=JSON.stringify(context);

    // Si le user ID est connu on enregistre les logs dans la table de journalisation
    if (userId!=''){
      sqlInsert="INSERT INTO crm.logscb (date, message,intent, entities, contextes, response, userCB_iduserCB) VALUES (SYSDATE(),'"+msgUser+"', '"+intent+"','"+entities+"','"+context+"','"+rep+"','"+userId+"');";
      con.query(sqlInsert, function (err, result, fields) {
        if (err){
          console.log('SQL ERROR : ' + err);
        }
      });
    }
  }
  // fin function logConv

  // fonction qui va permettre d'enregistrer les erreurs
  function logErr(err){

    // Récupérer les valeurs textes des JSON pour l'enregistrement
    err=JSON.stringify(err);
    msgUser=JSON.stringify(msgUser);
    intent=JSON.stringify(intent);
    entities=JSON.stringify(entities);
    context=JSON.stringify(context);

    // éviter des erreurs SQL en surpprimant les caractètes d'échappement
    err=err.replace(/'/g, " ");

    // Si le user ID est connu on enregistre les logs dans la table de journalisation
    if (userId!=''){
      sqlInsert="INSERT INTO crm.errorcb(date,message,intent,entities,contextes,error,userCB_iduserCB)VALUES(SYSDATE(),'"+msgUser+"','"+intent+"','"+entities+"','"+context+"','"+err+"','"+userId+"');";
      con.query(sqlInsert, function (err, result, fields) {
        if (err){
          console.log('aie aie aie');
        }
      });
    }
  }
  // fin function logErr

}
// fin function traitementIntent

// exports du controler et du bot
module.exports.controller = controller;
module.exports.bot = bot;
