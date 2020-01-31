BEGIN;

SET client_encoding = 'LATIN1';

CREATE TABLE listing (
    id integer NOT NULL,
    addr text NOT NULL,
    price integer NOT NULL,
    suburb text NOT NULL,
    agentId integer NOT NULL
);

CREATE TABLE agent (
    id integer NOT NULL,
    fullname text NOT NULL,
    officeId integer NOT NULL
);

CREATE TABLE office (
    id integer NOT NULL,
    officename text NOT NULL
);

COPY office (id, officename) FROM stdin;
1	Remax
2	Pam
\.

COPY agent (id, fullname, officeId) FROM stdin;
1	Bob	1
2	Joe	1
3	Moe	2
\.

COPY listing (id, addr, price, suburb, agentId) FROM stdin;
1	1street	1780000	Umhlanga	1
2	2road	237500	Ballito	1
3	3way	186800	Durban North	2
4	4circle	127800	Umgeni Park	2
5	5lane	731200	Umhlanga	3
\.








ALTER TABLE ONLY listing
    ADD CONSTRAINT listing_pkey PRIMARY KEY (id);

ALTER TABLE ONLY agent
    ADD CONSTRAINT agent_pkey PRIMARY KEY (id);

ALTER TABLE ONLY office
    ADD CONSTRAINT office_pkey PRIMARY KEY (id);

ALTER TABLE ONLY listing
    ADD CONSTRAINT agent_fkey FOREIGN KEY (agentId) REFERENCES agent(id);

ALTER TABLE ONLY agent
    ADD CONSTRAINT office_fkey FOREIGN KEY (officeId) REFERENCES office(id);

COMMIT;

ANALYZE listing;
ANALYZE agent;
ANALYZE office;