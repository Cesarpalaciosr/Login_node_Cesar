CREATE TABLE users (
    id integer NOT NULL,
    name character varying(40) NOT NULL,
    age integer NOT NULL,
    username character varying(40) NOT NULL,
    email character varying(80) NOT NULL,
    password character varying(80) NOT NULL,
    id_person bigint NOT NULL,
    roles integer DEFAULT 1 NOT NULL
);

ALTER TABLE users OWNER TO postgres;

CREATE SEQUENCE users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE users_id_seq OWNER TO postgres;

ALTER SEQUENCE users_id_seq OWNED BY users.id;

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);

INSERT INTO users (id, name, age, username, email, password, id_person, roles) VALUES 
(20,	'cesar palacios',	22,	'cesarp20',	'capr99@hotmail.com',	'cesar123',	26514270,	1),
(21,	'cacaca',	21,	'cesarp12',	'cesarglp@live.com',	'cacsacsacascsa',	2311321321321,	1),
(23,	'cacaca',	21,	'cesarp20122',	'cesarglp@live.com',	'cacscacascsa',	213123213123131,	1),
(24,	'adadadad',	2312,	'cesasasarp2012',	'cesarglp@live.com',	'acssacsasasa',	21321321,	1),
(25,	'acascsa',	21,	'sacassacsa',	'cesarglp@live.com',	'acassasa',	231312321,	1),
(26,	'adadadad',	21,	'cesasasarp2012',	'cacasscapr99@hotmail.com',	'csa2sasadsa',	2131313213213,	1),
(29,	'cesarp2012',	22,	'ceasrpawqw',	'casdasp@live.com',	'213123213132',	2132133213,	1),
(30,	'cesarp22012',	22,	'ceasrpawqw',	'casdasp@live.com',	'acascsaassac',	213213321209,	1),
(31,	'cesarp222012',	22,	'ceasrpawqw22',	'ceasadasda@hotmail.com',	'cacsasa',	213132112222,	1);

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_person);

