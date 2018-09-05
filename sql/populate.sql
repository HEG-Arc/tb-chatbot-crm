INSERT INTO `crm`.`rating`
(`value`)
VALUES
('Prospect');
INSERT INTO `crm`.`rating`
(`value`)
VALUES
('CLient A');
INSERT INTO `crm`.`rating`
(`value`)
VALUES
('Client B');
INSERT INTO `crm`.`rating`
(`value`)
VALUES
('Client C');


INSERT INTO  `crm`.`status`
(`value`)
VALUES
('In progress');
INSERT INTO  `crm`.`status`
(`value`)
VALUES
('Win');
INSERT INTO  `crm`.`status`
(`value`)
VALUES
('Lost');
INSERT INTO  `crm`.`status`
(`value`)
VALUES
('Dead');


INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('NP5',250000);
INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('NP3',150000);
INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('529XS',240000);
INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('529XW',2900000);
INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('529XF',3200000);
INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('629XS',280000);
INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('629XW',3000000);
INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('629XW3',3400000);
INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('Nano5',265000);
INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('Nano6',299000);
INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('LaserSmart501',500000);
INSERT INTO  `crm`.`machine`
(`name`, `price`)
VALUES
('830XW',410000);


INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('CH');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('AT');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('DE_North');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('DE_South');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('DE_East');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('DE_West');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('FR');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('IT');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('GB');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('PT');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('BE');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('TR');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('US');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('IN');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('CN');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('JP');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('KR');
INSERT INTO `crm`.`salesterritory`
(`name`)
VALUES
('EX');

INSERT INTO `crm`.`type`
(`value`)
VALUES
('Visit@Customer');
INSERT INTO `crm`.`type`
(`value`)
VALUES
('Visit@Rollo');
INSERT INTO `crm`.`type`
(`value`)
VALUES
('Visit@Exhib');
INSERT INTO `crm`.`type`
(`value`)
VALUES
('Tel');
INSERT INTO `crm`.`type`
(`value`)
VALUES
('Email');
INSERT INTO `crm`.`type`
(`value`)
VALUES
('DemoMachine');
INSERT INTO `crm`.`type`
(`value`)
VALUES
('Installation');
INSERT INTO `crm`.`type`
(`value`)
VALUES
('TestTool');
INSERT INTO `crm`.`type`
(`value`)
VALUES
('Formation@Customer');
INSERT INTO `crm`.`type`
(`value`)
VALUES
('Formation@Rollo');
INSERT INTO `crm`.`type`
(`value`)
VALUES
('Intervention');
INSERT INTO `crm`.`type`
(`value`)
VALUES
('Hotline');

INSERT INTO `crm`.`company`
(`name`,
`city`,
`street`,
`NPA`,
`country`,
`salesterritory_idsalesterritory`,
`rating_idrating`)
VALUES
('Rollomatic SA',
'Le Landeron',
'Rue des prés bugnons 3',
2525,
'Switzerland',
1,
2);
INSERT INTO `crm`.`company`
(`name`,
`city`,
`street`,
`NPA`,
`country`,
`salesterritory_idsalesterritory`,
`rating_idrating`)
VALUES
('Strausak AG',
'Lohn-Ammannsegg',
'Alte Bernstrasse 53',
4573,
'Switzerland',
1,
4);
INSERT INTO `crm`.`company`
(`name`,
`city`,
`street`,
`NPA`,
`country`,
`salesterritory_idsalesterritory`,
`rating_idrating`)
VALUES
('Lamina',
'Yverdon-les-bains',
'Rue Pytagore 4',
1400,
'Switzerland',
1,
1);
INSERT INTO `crm`.`company`
(`name`,
`city`,
`street`,
`NPA`,
`country`,
`salesterritory_idsalesterritory`,
`rating_idrating`)
VALUES
('Rollier',
'le Landerdon',
'Rue de la Neuveville 4',
2525,
'Switzerland',
1,
3);
INSERT INTO `crm`.`company`
(`name`,
`city`,
`street`,
`NPA`,
`country`,
`salesterritory_idsalesterritory`,
`rating_idrating`)
VALUES
('Rolex',
'Bienne ',
'Rue David-Moning 9',
2504,
'Switzerland',
1,
2);
INSERT INTO `crm`.`company`
(`name`,
`city`,
`street`,
`NPA`,
`country`,
`salesterritory_idsalesterritory`,
`rating_idrating`)
VALUES
('Manufacture ETA',
'Fontainemelon ',
'Avenue Robert 13',
2052,
'Switzerland',
1,
3);
INSERT INTO `crm`.`company`
(`name`,
`city`,
`street`,
`NPA`,
`country`,
`salesterritory_idsalesterritory`,
`rating_idrating`)
VALUES
('Distrelec',
'Nänikon ',
'Grabenstrasse 6',
8606,
'Switzerland',
1,
1);
INSERT INTO `crm`.`company`
(`name`,
`city`,
`street`,
`NPA`,
`country`,
`salesterritory_idsalesterritory`,
`rating_idrating`)
VALUES
('Digitec',
'Kriens ',
'Sternmatt 6',
6010 ,
'Switzerland',
1,
1);
INSERT INTO `crm`.`company`
(`name`,
`city`,
`street`,
`NPA`,
`country`,
`salesterritory_idsalesterritory`,
`rating_idrating`)
VALUES
('Brasseler',
'Lemgo',
'Trophagener Weg 25',
32657  ,
'Germany',
3,
2);

INSERT INTO `crm`.`function`
(`name`)
VALUES
('Director');
INSERT INTO `crm`.`function`
(`name`)
VALUES
('Purchasing manager');
INSERT INTO `crm`.`function`
(`name`)
VALUES
('Production manager');
INSERT INTO `crm`.`function`
(`name`)
VALUES
('Production operator');
INSERT INTO `crm`.`function`
(`name`)
VALUES
('Secretary');
INSERT INTO `crm`.`function`
(`name`)
VALUES
('Accountant');

INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(1,
'Jonathan',
'Charlet',
'j.charlet@rollomatic.ch',
'+41794306834',
5);

INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(1,
'Damien',
'Wunderlin',
'd.wunderlin@rollomatic.ch',
'+41794306834',
2);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(1,
'Christophe',
'Girard',
'c.girard@rollomatic.ch',
'+41794306834',
1);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(2,
'Alexandre',
'Condrau',
'a.condrau@strausak-swiss.ch',
'+41794306834',
1);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(2,
'Vanessa',
'Aegerter',
'v.aegerter@strausak-swiss.ch',
'+41794306834',
4);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(3,
'Marie',
'Baume',
'm.baume@lamina.ch',
'+41794306834',
2);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(4,
'Michel',
'Rollier',
'm.rollier@rollier.ch',
'+41794306834',
4);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(4,
'Francis',
'Rollier',
'f.rollier@rollier.ch',
'+41794306834',
3);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(5,
'David',
'Monnet',
'd.monnte@rollex.ch',
'+41794306834',
1);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(5,
'Mathias',
'Meier',
'm.meier@rollex.ch',
'+41794306834',
5);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(6,
'Francisco',
'Sanchez',
'f.sanchez@eta.ch',
'+41794306834',
3);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(7,
'Alice',
'Alice',
'a.alice@distrelec.ch',
'+41794306834',
3);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(8,
'Bob',
'Bob',
'b.bob@digitec.ch',
'+41794306834',
1);
INSERT INTO `crm`.`contact`
(`company_idcompany`,
`firstname`,
`lastname`,
`email`,
`telephone`,
`function_idfunction`
)
VALUES
(9,
'Christian',
'Muller',
'c.muller@brassler.de',
'+41794306834',
1);

INSERT INTO `crm`.`offer`
(`title`,
`comments`,
`company_idcompany`,
`Status_idStatus`,
`date`,
`discount`)
VALUES
('OF-629XS-Rollex-001',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a imperdiet ante. Cras et sem nec dui vehicula consectetur. Curabitur et molestie massa',
5,
2,
'2018-6-04',
10000);

INSERT INTO `crm`.`offer`
(`title`,
`comments`,
`company_idcompany`,
`Status_idStatus`,
`date`,
`discount`)
VALUES
('OF-LS500-Rollomatic-001',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a imperdiet ante. Cras et sem nec dui vehicula consectetur. Curabitur et molestie massa',
1,
1,
'2018-7-25',
5000);

INSERT INTO `crm`.`offer`
(`title`,
`comments`,
`company_idcompany`,
`Status_idStatus`,
`date`,
`discount`)
VALUES
('OF-NP5-Rollomatic-002',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a imperdiet ante. Cras et sem nec dui vehicula consectetur. Curabitur et molestie massa',
1,
2,
'2018-5-14',
6500);

INSERT INTO `crm`.`offer`
(`title`,
`comments`,
`company_idcompany`,
`Status_idStatus`,
`date`,
`discount`)
VALUES
('OF-NP3-Strausak-001',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a imperdiet ante. Cras et sem nec dui vehicula consectetur. Curabitur et molestie massa',
2,
3,
'2017-12-08',
2500);

INSERT INTO `crm`.`offer`
(`title`,
`comments`,
`company_idcompany`,
`Status_idStatus`,
`date`,
`discount`)
VALUES
('OF-NP3-Strausak-002',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a imperdiet ante. Cras et sem nec dui vehicula consectetur. Curabitur et molestie massa',
2,
3,
'2018-1-30',
4000);




INSERT INTO `crm`.`offer_has_machine`
(`offer_idoffer`,
`machine_idmachine`,
`quantity`
)
VALUES
(1,
6,
2);
INSERT INTO `crm`.`offer_has_machine`
(`offer_idoffer`,
`machine_idmachine`,
`quantity`
)
VALUES
(2,
11,
1);
INSERT INTO `crm`.`offer_has_machine`
(`offer_idoffer`,
`machine_idmachine`,
`quantity`
)
VALUES
(3,
1,
2);
INSERT INTO `crm`.`offer_has_machine`
(`offer_idoffer`,
`machine_idmachine`,
`quantity`
)
VALUES
(4,
2,
2);
INSERT INTO `crm`.`offer_has_machine`
(`offer_idoffer`,
`machine_idmachine`,
`quantity`
)
VALUES
(5,
2,
1);



INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(1,
1,
3);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(2,
1,
1);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(7,
1,
3);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(11,
1,
1);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(1,
2,
2);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(2,
2,
3);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(8,
4,
6);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(3,
4,
3);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(9,
5,
4);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(10,
5,
8);


INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(9,
6,
6);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(10,
6,
2);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(1,
9,
5);


INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(4,
9,
4);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(12,
9,
2);

INSERT INTO `crm`.`machine_has_company`
(`machine_idmachine`,
`company_idcompany`,
`quantity`)
VALUES
(6,
9,
4);


INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
1,
1,
'2018-6-04');

INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
1,
1,
'2018-10-04');

INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
1,
2,
'2018-11-05');


INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
1,
6,
'2018-02-05');

INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
1,
7,
'2018-03-20');

INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
1,
10,
'2018-05-18');

INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
1,
9,
'2018-04-24');


INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
1,
11,
'2018-11-24');


INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
2,
12,
'2018-11-18');


INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
2,
12,
'2018-09-18');

INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
2,
11,
'2018-11-23');


INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
2,
4,
'2018-09-23');

INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
3,
5,
'2018-09-12');

INSERT INTO `crm`.`event`
(`title`,
`decription`,
`company_idcompany`,
`type_idtype`,
`date`)
VALUES
('Lorem Ipsum',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum purus. Praesent venenatis commodo aliquet. Aenean pellentesque erat lectus, sit amet porttitor risus faucibus eget. ',
3,
3,
'2018-3-2');



INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(1,
1);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(2,
1);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(1,
2);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(2,
2);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(1,
3);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(3,
4);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(1,
4);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(2,
5);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(1,
6);
INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(2,
6);
INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(3,
6);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(1,
7);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(1,
8);


INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(5,
9);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(5,
10);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(6,
11);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(5,
12);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(5,
13);

INSERT INTO `crm`.`contact_has_event`
(`contact_idcontact`,
`event_idevent`)
VALUES
(5,
14);


INSERT INTO `crm`.`competitor`
(`name`)
VALUES
('Anca');

INSERT INTO `crm`.`competitor`
(`name`)
VALUES
('DMG');

INSERT INTO `crm`.`competitor`
(`name`)
VALUES
('Schneeberger');

INSERT INTO `crm`.`competitor`
(`name`)
VALUES
('Junker');

INSERT INTO `crm`.`competitor`
(`name`)
VALUES
('Walter');

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('MX5',
1);

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('MX7',
1);

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('FX3',
1);

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('FX5',
1);

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('FX7',
1);


INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('EcoLine',
2);

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('Jumat',
3);

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('Gimistar',
3);

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('Jucam',
3);

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('Norma',
4);

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('Gemini',
4);

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('Corvus',
4);

INSERT INTO `crm`.`machinecompetitor`
(`name`,
`Competitor_idCompetitor`)
VALUES
('Helitronic',
5);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(3,
13,
2);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(3,
10,
1);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(4,
1,
2);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(4,
7,
1);


INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(5,
12,
1);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(5,
10,
1);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(5,
11,
3);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(6,
7,
3);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(6,
3,
2);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(6,
6,
2);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(7,
9,
2);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(7,
8,
2);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(8,
4,
4);


INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(8,
5,
3);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(9,
1,
3);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(9,
2,
1);

INSERT INTO `crm`.`company_has_machinecompetitor`
(`company_idcompany`,
`machineCompetitor_idmachineCompetitor`,
`quantity`)
VALUES
(9,
6,
4);



commit;
