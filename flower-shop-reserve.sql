--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-11-25 15:02:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 231 (class 1259 OID 26834)
-- Name: advice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.advice (
    id integer NOT NULL,
    product_id integer NOT NULL
);


ALTER TABLE public.advice OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 26833)
-- Name: advice_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.advice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.advice_id_seq OWNER TO postgres;

--
-- TOC entry 3424 (class 0 OID 0)
-- Dependencies: 230
-- Name: advice_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.advice_id_seq OWNED BY public.advice.id;


--
-- TOC entry 227 (class 1259 OID 26606)
-- Name: carts_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carts_users (
    users_id integer,
    product_id integer,
    count smallint
);


ALTER TABLE public.carts_users OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 26492)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 26491)
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO postgres;

--
-- TOC entry 3425 (class 0 OID 0)
-- Dependencies: 216
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- TOC entry 223 (class 1259 OID 26519)
-- Name: favorites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    users_id integer,
    product_id integer
);


ALTER TABLE public.favorites OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 26518)
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorites_id_seq OWNER TO postgres;

--
-- TOC entry 3426 (class 0 OID 0)
-- Dependencies: 222
-- Name: favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;


--
-- TOC entry 225 (class 1259 OID 26560)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    users_id integer,
    date_order timestamp with time zone,
    status_order_id integer
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 26559)
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- TOC entry 3427 (class 0 OID 0)
-- Dependencies: 224
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- TOC entry 226 (class 1259 OID 26591)
-- Name: orders_products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders_products (
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    count smallint
);


ALTER TABLE public.orders_products OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 26501)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    title character varying,
    description character varying,
    price integer,
    available integer NOT NULL,
    img character varying,
    category_id integer
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 26500)
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_id_seq OWNER TO postgres;

--
-- TOC entry 3428 (class 0 OID 0)
-- Dependencies: 218
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- TOC entry 221 (class 1259 OID 26510)
-- Name: status_orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.status_orders (
    id integer NOT NULL,
    status character varying
);


ALTER TABLE public.status_orders OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 26509)
-- Name: status_orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.status_orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.status_orders_id_seq OWNER TO postgres;

--
-- TOC entry 3429 (class 0 OID 0)
-- Dependencies: 220
-- Name: status_orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.status_orders_id_seq OWNED BY public.status_orders.id;


--
-- TOC entry 229 (class 1259 OID 26822)
-- Name: trends; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trends (
    id integer NOT NULL,
    product_id integer
);


ALTER TABLE public.trends OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 26821)
-- Name: trends_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.trends_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trends_id_seq OWNER TO postgres;

--
-- TOC entry 3430 (class 0 OID 0)
-- Dependencies: 228
-- Name: trends_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.trends_id_seq OWNED BY public.trends.id;


--
-- TOC entry 215 (class 1259 OID 26482)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying,
    last_name character varying,
    nickname character varying,
    email character varying,
    password character varying,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    role character varying DEFAULT 'USER'::character varying,
    user_img character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 26481)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3431 (class 0 OID 0)
-- Dependencies: 214
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3224 (class 2604 OID 26837)
-- Name: advice id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.advice ALTER COLUMN id SET DEFAULT nextval('public.advice_id_seq'::regclass);


--
-- TOC entry 3218 (class 2604 OID 26495)
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- TOC entry 3221 (class 2604 OID 26522)
-- Name: favorites id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);


--
-- TOC entry 3222 (class 2604 OID 26563)
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- TOC entry 3219 (class 2604 OID 26819)
-- Name: product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- TOC entry 3220 (class 2604 OID 26513)
-- Name: status_orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status_orders ALTER COLUMN id SET DEFAULT nextval('public.status_orders_id_seq'::regclass);


--
-- TOC entry 3223 (class 2604 OID 26825)
-- Name: trends id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trends ALTER COLUMN id SET DEFAULT nextval('public.trends_id_seq'::regclass);


--
-- TOC entry 3216 (class 2604 OID 26485)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3418 (class 0 OID 26834)
-- Dependencies: 231
-- Data for Name: advice; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.advice (id, product_id) FROM stdin;
8	58
12	47
13	48
14	13
15	49
16	32
\.


--
-- TOC entry 3414 (class 0 OID 26606)
-- Dependencies: 227
-- Data for Name: carts_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carts_users (users_id, product_id, count) FROM stdin;
8	28	3
5	14	3
5	22	3
8	24	1
2	10	2
9	50	2
7	16	1
5	27	3
9	6	1
2	32	4
3	14	4
2	50	2
4	14	4
2	20	4
3	41	3
7	43	4
4	27	5
4	42	1
7	6	1
6	24	5
4	43	3
6	23	5
8	14	5
9	16	4
5	22	1
10	44	3
7	16	2
6	12	5
8	24	4
7	24	2
2	1	3
9	26	3
1	23	3
4	13	2
9	30	5
4	44	1
10	22	4
8	34	5
12	1	3
3	50	1
3	43	1
3	33	6
\.


--
-- TOC entry 3404 (class 0 OID 26492)
-- Dependencies: 217
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (id, name) FROM stdin;
1	Букеты
2	Уличные цветы
3	Домашние цветы
4	Цветы
\.


--
-- TOC entry 3410 (class 0 OID 26519)
-- Dependencies: 223
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.favorites (id, users_id, product_id) FROM stdin;
316	11	43
317	11	42
321	11	32
322	3	34
323	3	43
324	11	16
327	1	1
329	11	22
332	11	21
333	11	13
335	11	4
337	11	35
339	11	37
340	11	1
345	11	52
347	11	47
286	12	11
287	12	9
288	12	7
289	12	34
290	12	16
291	12	44
292	12	49
293	12	1
\.


--
-- TOC entry 3412 (class 0 OID 26560)
-- Dependencies: 225
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, users_id, date_order, status_order_id) FROM stdin;
1	1	2023-10-03 00:00:00+05	1
2	3	2023-01-29 00:00:00+05	4
3	10	2023-04-09 00:00:00+05	4
4	9	2023-10-13 00:00:00+05	3
5	3	2023-01-17 00:00:00+05	2
6	5	2023-03-29 00:00:00+05	4
7	1	2023-06-09 00:00:00+05	4
8	9	2023-03-05 00:00:00+05	2
9	7	2023-10-01 00:00:00+05	2
10	1	2023-07-29 00:00:00+05	1
11	4	2023-01-29 00:00:00+05	2
12	1	2022-12-06 00:00:00+05	2
13	2	2022-12-29 00:00:00+05	4
14	7	2023-08-05 00:00:00+05	1
15	8	2023-01-28 00:00:00+05	2
16	10	2022-12-22 00:00:00+05	3
17	5	2023-04-10 00:00:00+05	3
18	3	2023-01-13 00:00:00+05	4
19	3	2023-04-21 00:00:00+05	2
20	9	2023-01-09 00:00:00+05	1
21	8	2023-09-22 00:00:00+05	4
22	4	2022-11-10 00:00:00+05	3
23	7	2023-04-10 00:00:00+05	3
24	6	2023-03-04 00:00:00+05	2
25	9	2023-02-17 00:00:00+05	2
26	4	2023-05-16 00:00:00+05	4
27	6	2023-09-15 00:00:00+05	4
28	10	2023-08-23 00:00:00+05	3
29	6	2023-05-05 00:00:00+05	2
30	10	2022-12-19 00:00:00+05	3
31	9	2022-11-18 00:00:00+05	3
32	3	2023-02-27 00:00:00+05	2
33	9	2023-04-07 00:00:00+05	3
34	3	2023-07-27 00:00:00+05	1
35	1	2023-07-28 00:00:00+05	2
36	9	2023-02-01 00:00:00+05	4
37	6	2023-03-21 00:00:00+05	2
38	7	2023-03-13 00:00:00+05	3
39	4	2023-03-30 00:00:00+05	3
40	1	2022-12-11 00:00:00+05	3
41	10	2023-06-03 00:00:00+05	3
42	9	2023-10-21 00:00:00+05	2
43	3	2022-11-10 00:00:00+05	4
44	7	2023-01-10 00:00:00+05	1
45	7	2023-04-04 00:00:00+05	3
46	1	2023-01-25 00:00:00+05	2
47	8	2022-11-06 00:00:00+05	1
48	4	2023-01-13 00:00:00+05	1
49	3	2022-12-30 00:00:00+05	1
50	9	2023-01-08 00:00:00+05	2
51	7	2023-08-30 00:00:00+05	1
52	7	2023-04-03 00:00:00+05	1
53	7	2023-03-16 00:00:00+05	2
54	10	2023-04-10 00:00:00+05	2
55	8	2023-05-14 00:00:00+05	4
56	7	2023-03-07 00:00:00+05	2
57	7	2023-08-07 00:00:00+05	3
58	6	2023-01-29 00:00:00+05	4
59	10	2023-09-30 00:00:00+05	4
60	10	2022-12-04 00:00:00+05	1
61	6	2023-03-15 00:00:00+05	4
62	1	2023-06-21 00:00:00+05	3
63	1	2023-01-19 00:00:00+05	3
64	10	2023-06-27 00:00:00+05	3
65	5	2022-12-04 00:00:00+05	3
66	4	2023-08-18 00:00:00+05	2
67	10	2023-07-21 00:00:00+05	4
68	5	2023-09-21 00:00:00+05	2
69	6	2023-02-14 00:00:00+05	2
70	5	2023-04-30 00:00:00+05	1
71	1	2023-05-31 00:00:00+05	1
72	6	2022-11-23 00:00:00+05	2
73	1	2023-05-02 00:00:00+05	2
74	6	2022-12-26 00:00:00+05	3
75	6	2023-08-11 00:00:00+05	4
76	1	2022-11-21 00:00:00+05	2
77	9	2023-06-13 00:00:00+05	1
78	6	2023-10-25 00:00:00+05	3
79	5	2023-01-31 00:00:00+05	1
80	9	2022-12-31 00:00:00+05	4
81	8	2023-01-08 00:00:00+05	4
82	10	2023-10-03 00:00:00+05	2
83	5	2023-09-11 00:00:00+05	3
84	3	2023-05-18 00:00:00+05	1
85	8	2023-01-28 00:00:00+05	1
86	7	2023-04-18 00:00:00+05	4
87	1	2023-02-27 00:00:00+05	3
88	6	2022-11-17 00:00:00+05	4
89	8	2023-03-26 00:00:00+05	2
90	7	2023-08-03 00:00:00+05	1
91	5	2023-10-01 00:00:00+05	2
92	3	2023-09-09 00:00:00+05	1
93	1	2023-04-28 00:00:00+05	1
94	11	2023-11-21 06:02:57.572+05	1
95	11	2023-11-21 06:04:36.904+05	1
96	11	2023-11-21 06:05:00.278+05	1
97	11	2023-11-21 06:06:34.656+05	1
98	11	2023-11-21 06:06:49.534+05	1
99	11	2023-11-21 06:08:18.824+05	1
100	11	2023-11-21 06:08:48.533+05	1
101	11	2023-11-21 06:11:13.559+05	1
102	11	2023-11-21 06:11:55.727+05	1
103	11	2023-11-21 06:15:26.181+05	1
104	11	2023-11-21 06:16:47.828+05	1
112	11	2023-11-21 06:29:12.176+05	1
113	11	2023-11-21 06:29:36.559+05	1
115	11	2023-11-21 18:45:46.134+05	1
116	11	2023-11-21 18:46:30.518+05	1
117	11	2023-11-21 18:46:55.441+05	1
118	11	2023-11-21 18:46:59.142+05	1
119	11	2023-11-21 18:47:42.308+05	1
120	11	2023-11-21 18:48:12.595+05	1
121	11	2023-11-21 18:48:48.458+05	1
122	11	2023-11-21 18:49:33.133+05	1
123	11	2023-11-21 18:50:21.105+05	1
124	11	2023-11-21 18:51:24.498+05	1
125	11	2023-11-21 18:52:37.918+05	1
127	11	2023-11-21 18:58:23.58+05	1
128	11	2023-11-21 18:59:27.662+05	1
129	11	2023-11-21 19:00:21.135+05	1
130	11	2023-11-21 19:09:33.625+05	1
132	11	2023-11-21 19:21:21.71+05	1
133	11	2023-11-21 19:22:40.583+05	1
134	11	2023-11-21 19:23:10.931+05	1
110	11	2023-11-21 06:26:52.941+05	4
106	11	2023-11-21 06:17:55.446+05	4
107	11	2023-11-21 06:25:50.507+05	4
108	11	2023-11-21 06:25:50.513+05	4
114	11	2023-11-21 18:45:40.181+05	4
111	11	2023-11-21 06:27:15.145+05	4
131	11	2023-11-21 19:16:08.895+05	4
109	11	2023-11-21 06:26:17.54+05	4
126	11	2023-11-21 18:53:24.508+05	2
135	11	2023-11-21 19:24:22.955+05	1
136	11	2023-11-21 19:27:00.946+05	1
137	11	2023-11-21 19:29:01.363+05	1
138	11	2023-11-21 19:29:46.27+05	1
139	11	2023-11-21 19:32:28.309+05	1
140	11	2023-11-21 19:36:07.48+05	1
141	11	2023-11-21 19:37:43.519+05	1
143	11	2023-11-21 19:46:56.74+05	1
144	11	2023-11-21 19:48:58.623+05	1
145	11	2023-11-23 18:51:10.193+05	4
105	11	2023-11-21 06:17:14.853+05	4
146	11	2023-11-23 20:22:08.909+05	1
147	11	2023-11-23 20:23:43.965+05	1
148	11	2023-11-23 20:24:52.712+05	1
149	11	2023-11-23 20:25:47.08+05	1
150	11	2023-11-23 20:27:34.226+05	4
151	11	2023-11-23 20:28:28.24+05	1
152	11	2023-11-23 20:30:43.886+05	4
153	11	2023-11-24 06:04:57.876+05	4
142	11	2023-11-21 19:40:46.739+05	4
154	11	2023-11-25 09:35:51.295+05	1
155	11	2023-11-25 11:00:12.735+05	1
\.


--
-- TOC entry 3413 (class 0 OID 26591)
-- Dependencies: 226
-- Data for Name: orders_products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders_products (order_id, product_id, count) FROM stdin;
69	2	2
32	47	1
38	7	2
31	38	1
2	18	1
77	25	5
85	35	3
28	9	5
4	46	4
61	49	5
58	30	1
77	40	5
38	24	2
55	33	4
25	21	4
41	47	3
49	40	5
61	6	2
73	43	6
41	2	1
32	25	4
46	13	3
43	28	5
53	25	3
10	18	4
31	14	6
65	12	4
42	47	3
48	7	2
77	2	3
46	39	1
66	37	4
44	1	1
47	42	4
65	7	3
92	7	1
82	47	5
57	40	6
29	22	1
63	10	1
84	27	6
79	2	6
33	50	1
14	33	2
28	10	2
52	37	3
25	14	4
83	11	3
21	35	1
55	48	1
56	27	6
48	11	1
80	24	6
35	8	2
13	20	2
55	44	6
78	25	5
36	16	1
43	25	5
61	39	4
51	7	3
57	7	4
62	25	5
2	4	1
87	46	5
49	20	1
25	43	4
62	32	3
82	30	4
80	25	4
26	1	5
11	33	3
56	4	2
21	21	4
38	9	2
34	30	5
4	21	3
5	48	6
83	32	1
68	39	5
38	38	4
70	48	3
42	41	6
64	23	1
105	1	1
105	7	1
106	1	1
106	7	1
107	1	1
108	1	1
107	7	1
108	7	1
109	1	1
109	7	1
110	1	1
110	7	1
111	1	1
111	7	1
126	1	1
126	7	1
127	1	1
130	9	1
133	23	1
136	7	1
138	17	1
139	29	2
141	35	1
142	2	1
143	12	2
144	34	1
145	40	3
150	1	2
151	1	3
152	1	1
152	7	1
154	58	5
155	61	1
\.


--
-- TOC entry 3406 (class 0 OID 26501)
-- Dependencies: 219
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product (id, title, description, price, available, img, category_id) FROM stdin;
52	Букет 2	Описание букета 2	1000	5	https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/People-arrows-solid.svg/1200px-People-arrows-solid.svg.png	1
14	Cochlearius	nunc commodo placerat praesent blandit nam nulla	3350	19	https://via.placeholder.com/600/24f355	2
41	Columba 	eu interdum eu tincidunt in leo maecenas pulvinar	1268	8	https://via.placeholder.com/600/24f355	2
48	Buteo regalis	ac neque duis bibendum morbi non quam	9770	4	https://via.placeholder.com/600/24f355	1
47	Panthera tigris	pede ac diam cras pellentesque volutpat	9133	10	https://via.placeholder.com/600/24f355	4
44	Myotis lucifugus	turpis integer aliquet massa id lobortis convallis tortor	2934	21	https://via.placeholder.com/600/24f355	2
43	Connochaetus taurinus	eleifend luctus ultricies eu nibh	9401	4	https://via.placeholder.com/600/d32776	1
42	Pteropus rufus	facilisi cras non velit nec nisi vulputate	6071	27	https://via.placeholder.com/600/d32776	1
39	Ara chloroptera	faucibus orci luctus et ultrices posuere	6454	18	https://via.placeholder.com/600/24f355	4
38	Geococcyx californianus	tincidunt nulla mollis molestie lorem quisque ut	4651	5	https://via.placeholder.com/600/d32776	4
33	Trachyphonus vaillantii	duis consequat dui nec nisi volutpat eleifend donec	302	22	https://via.placeholder.com/600/d32776	2
31	Anser caerulescens	dui vel nisl duis ac nibh fusce lacus	3170	20	https://via.placeholder.com/600/d32776	4
4	Sarkidornis melanotos	odio donec vitae nisi nam ultrices libero	3521	23	https://via.placeholder.com/600/24f355	1
6	unavailable	a suscipit nulla elit ac nulla sed vel enim	4446	4	https://via.placeholder.com/600/d32776	2
8	Naja haje	ultrices erat tortor sollicitudin mi sit amet	5009	3	https://via.placeholder.com/600/24f355	4
10	Nannopterum harrisi	lacus morbi sem mauris laoreet ut rhoncus aliquet	472	7	https://via.placeholder.com/600/24f355	2
11	Laniarius ferrugineus	magnis dis parturient montes	9827	27	https://via.placeholder.com/600/d32776	3
13	Phalacrocorax carbo	in congue etiam justo etiam pretium iaculis justo in hac	542	17	https://via.placeholder.com/600/24f355	1
16	Cebus apella	porttitor pede justo eu massa donec dapibus duis at	4170	16	https://via.placeholder.com/600/24f355	4
18	Ardea golieth	sem mauris laoreet	8751	28	https://via.placeholder.com/600/24f355	2
20	Plegadis ridgwayi	curae mauris viverra	6070	14	https://via.placeholder.com/600/24f355	4
21	Boa constrictor mexicana	ultrices phasellus id sapien in sapien iaculis congue vivamus	9123	24	https://via.placeholder.com/600/24f355	1
22	Parus atricapillus	lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar	6102	5	https://via.placeholder.com/600/d32776	2
49	Lorythaixoides concolor	vulputate elementum nullam varius nulla	8540	20	https://via.placeholder.com/600/24f355	2
23	Lasiodora parahybana	libero nam dui proin leo odio porttitor id consequat	5567	29	https://via.placeholder.com/600/24f355	3
35	Corythornis cristata	erat id mauris vulputate elementum nullam	3191	25	https://via.placeholder.com/600/24f355	1
37	Hystrix indica	aliquam non mauris morbi non lectus aliquam	9915	28	https://via.placeholder.com/600/24f355	1
1	Gopherus agassizii	lobortis vel dapibus at diam	8067	14	https://via.placeholder.com/600/d32776	4
46	Trichoglossus	fusce posuere felis sed	7567	4	https://via.placeholder.com/600/24f355	4
2	Madoqua kirkii	sagittis sapien cum sociis natoque penatibus et	6618	20	https://via.placeholder.com/600/24f355	3
32	Varanus sp.	nec nisi volutpat	5000	10	https://via.placeholder.com/600/d32776	4
9	Rhea americana	volutpat in congue etiam justo etiam pretium	2510	14	https://via.placeholder.com/600/d32776	1
12	Acanthaster planci	ipsum primis in faucibus orci	1176	8	https://via.placeholder.com/600/d32776	4
34	Crotalus cerastes	pharetra magna ac consequat metus sapien ut	341	29	https://via.placeholder.com/600/24f355	1
17	Boa constrictor mexicana	leo rhoncus sed vestibulum	9378	29	https://via.placeholder.com/600/24f355	1
61	Букетик	Описанице	12000	15	https://img.freepik.com/premium-photo/white-pink-peonies-opened-blossoms-bunch-wallpaper_208581-1967.jpg?size=626&ext=jpg&ga=GA1.1.857530799.1699784929&semt=sph	1
40	Gymnorhina tibicen	lorem ipsum dolor sit amet consectetuer adipiscing elit	7062	16	https://via.placeholder.com/600/24f355	3
7	Terathopius ecaudatus	vitae ipsum aliquam	1015	20	https://via.placeholder.com/600/d32776	3
24	Morelia spilotes variegata	sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt	4617	2	https://via.placeholder.com/600/24f355	4
25	Nesomimus trifasciatus	cursus vestibulum proin eu mi nulla ac enim	9643	28	https://via.placeholder.com/600/d32776	1
26	Climacteris melanura	elementum nullam varius nulla facilisi	6343	9	https://via.placeholder.com/600/24f355	2
27	Speothos vanaticus	parturient montes nascetur	6611	7	https://via.placeholder.com/600/d32776	3
28	Microcebus murinus	lobortis ligula sit amet	1398	5	https://via.placeholder.com/600/d32776	4
30	Lamprotornis sp.	integer ac neque duis bibendum morbi	4066	30	https://via.placeholder.com/600/24f355	2
50	Cacatua galerita	a pede posuere nonummy integer non velit donec	7232	10	https://via.placeholder.com/600/24f355	1
29	Anser caerulescens	magnis dis parturient montes	2824	12	https://via.placeholder.com/600/d32776	1
53	Букет 2	Описание букета 2	1000	6	https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/People-arrows-solid.svg/1200px-People-arrows-solid.svg.png	1
60	Example	Example Example 3	600	12	https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/People-arrows-solid.svg/1200px-People-arrows-solid.svg.png	1
58	Букет №5	Описание букета №5	900	0	https://img.freepik.com/premium-photo/white-pink-peonies-opened-blossoms-bunch-wallpaper_208581-1967.jpg?size=626&ext=jpg&ga=GA1.1.857530799.1699784929&semt=sph	2
62	Cochlearius	nunc commodo placerat praesent blandit nam nulla	3350	19	https://via.placeholder.com/600/24f355	2
\.


--
-- TOC entry 3408 (class 0 OID 26510)
-- Dependencies: 221
-- Data for Name: status_orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.status_orders (id, status) FROM stdin;
1	Создан
2	Получен
3	Оплачен
4	Отменен
\.


--
-- TOC entry 3416 (class 0 OID 26822)
-- Dependencies: 229
-- Data for Name: trends; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trends (id, product_id) FROM stdin;
3	58
5	61
8	41
9	47
10	48
11	13
12	12
13	32
\.


--
-- TOC entry 3402 (class 0 OID 26482)
-- Dependencies: 215
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, first_name, last_name, nickname, email, password, created_at, updated_at, role, user_img) FROM stdin;
1	Theodor	Waterland	mwaterland0	mwaterland0@hatena.ne.jp	nE5{zsMsm+a\\/m/	2023-04-07 00:00:00+05	2023-09-05 00:00:00+05	USER	\N
2	Jacklin	Marney	vmarney1	vmarney1@prlog.org	gY3@OQ6i>2)cM	2023-02-01 00:00:00+05	2023-05-04 00:00:00+05	USER	\N
3	Aviva	Alf	galf2	galf2@utexas.edu	nR1|m(Mg>y%+"`	2023-05-09 00:00:00+05	2022-06-12 00:00:00+05	USER	\N
4	Uriah	Dovinson	ldovinson3	ldovinson3@craigslist.org	yP5_@,2,E}?`KtPs	2023-02-09 00:00:00+05	2023-02-01 00:00:00+05	USER	\N
5	Brade	O'Cannan	tocannan4	tocannan4@booking.com	fB3{py039	2023-05-10 00:00:00+05	2023-03-03 00:00:00+05	USER	\N
6	Heddi	Barca	lbarca5	lbarca5@meetup.com	pR8!Q67PtfUK#a0+	2023-04-11 00:00:00+05	2023-05-01 00:00:00+05	USER	\N
7	Edgar	Haggerty	dhaggerty6	dhaggerty6@redcross.org	tJ6|eqtTJB~mmN*r	2023-06-08 00:00:00+05	2023-07-05 00:00:00+05	USER	\N
8	Nissa	Schooley	sschooley7	sschooley7@angelfire.com	rE1~pp<F9!k	2023-07-07 00:00:00+05	2022-06-12 00:00:00+05	USER	\N
9	Tammi	Andrzejewski	tandrzejewski8	tandrzejewski8@seattletimes.com	tB0(FQ&d(._?K3	2022-06-12 00:00:00+05	2022-06-11 00:00:00+05	USER	\N
10	Rhodie	Morilla	ymorilla9	ymorilla9@huffingtonpost.com	zW3/$CS>a'uWj	2022-02-12 00:00:00+05	2022-04-11 00:00:00+05	USER	\N
11	Daniil	Abdulov	abdulovdb	abdulov.dany@yandex.ru	1234	2022-02-12 00:00:00+05	2022-04-11 00:00:00+05	ADMIN	https://avatars.githubusercontent.com/u/118374108?v=4
18	Daniil	Latifi	DogGGG	abdulov@yandex.ru	$2b$05$cGJzn9ik0LtP5WBuC9IiDuvCduyQ.s.DHvmgle7DwwSxzMrIzQMpK	2023-11-06 13:55:43.255+05	2023-11-06 13:55:43.255+05	USER	
19	Ilir	Русланов	DogGG	dmx@gmail.com	$2b$05$uRnALMsDUMbgHKLeUnrTDOpSVhdnoU4EI2oPF.UfLeD9jTo1T0IMy	2023-11-06 13:56:58.661+05	2023-11-06 13:56:58.661+05	USER	
20	Daniil	Русланов	GGGf	a@aff	$2b$05$wjid/nwexZbzUb6rW.wqGO2oDeRTADKE2KyCBjeCz2RjnyfUvIIxe	2023-11-06 14:45:38.968+05	2023-11-06 14:45:38.968+05	USER	
21	Daniil	 a	abdulovdbff	ffasf@fdsf	$2b$05$E7CYEdILBKyjjYJUIzq2UO.DtSIs58A/Gowy94/DoeoeQt7K7mrXq	2023-11-06 14:46:54.79+05	2023-11-06 14:46:54.79+05	USER	
22	Daniil	Руслановff	ffdasf	asfaf@dsf	$2b$05$dJ9PVyvxwQlOjjUffdBG.e6R4Chlg/hs/CmAuO8JmIa0KPlfuZGiW	2023-11-06 14:48:52.502+05	2023-11-06 14:48:52.502+05	USER	
23	Daniil	Русланов	123	a@a123	$2b$05$D2lNWxSH6.WLPOfREX2WbOmllxtfuYhYn/ZO0HG27UrwOwPzgde2q	2023-11-06 14:53:25.24+05	2023-11-06 14:53:25.24+05	USER	
24	Ilir	Русланов	DDDggg	gg@gg	$2b$05$vj84W1VhT8rDBQ5dH3sv1ewh0fr.adacg9QptOGE6UyMGRV9b9Kly	2023-11-06 14:55:15.479+05	2023-11-06 14:55:15.479+05	USER	
25	Daniil	Latifi	Dogfa	fa@fa	$2b$05$cbPelxHMjXruXYSiZtajN.AFciHvR1Dn5Z0eDqcOnaoYOU5kDosIW	2023-11-06 14:57:53.455+05	2023-11-06 14:57:53.455+05	USER	
26	Daniil	Руслановa	aa	abdulovdb@gmail.com	$2b$05$itVpTEzgzojWMZlHfLudhexnGijIt6SDlG8/kmtk500Jaonjky1JK	2023-11-06 15:15:56.727+05	2023-11-06 15:15:56.727+05	USER	
27	Ilir	Русланов	abdulovdbDOGG	DOGG@mail.ru	$2b$05$uSZWVa.5KE.1GN1NiWmqTueeTAPzshzE1g283R0ipoYylrZi8c1r2	2023-11-06 18:01:26.284+05	2023-11-06 18:01:26.284+05	USER	
28	Ilir	Abdulov	DMX	dmx@yandex.ru	$2b$05$euj3DQqA7C1fsnCQ71aJfu0QQH8cmSOiH7QEObUi73c4jtX.ociwq	2023-11-06 18:07:32.615+05	2023-11-06 18:07:32.615+05	USER	
29	Кирилл	Мефодий	kirya	kirya@meph.com	$2b$05$nG6PVsTH4kSri7sd5Xx8MOKs88jo6mn2dnKmQB4.eNRjWK2IRNzkG	2023-11-07 05:40:02.317+05	2023-11-07 05:40:02.317+05	USER	
30	Daniil	Latifi	DogFFF	abdulovff.dany@yandex.ru	$2b$05$4UmPFl/vCZkGQqLcY2i6wuzV6K.a2uX9Yx1ftA9TkTA1XDvxCY/Bi	2023-11-07 05:53:32.108+05	2023-11-07 05:53:32.108+05	USER	
12	Rhodie	Morilla	abd	ymola9@huffingtost.com	1234	2022-02-12 00:00:00+05	2022-04-11 00:00:00+05	USER	\N
\.


--
-- TOC entry 3432 (class 0 OID 0)
-- Dependencies: 230
-- Name: advice_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.advice_id_seq', 17, true);


--
-- TOC entry 3433 (class 0 OID 0)
-- Dependencies: 216
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 1, false);


--
-- TOC entry 3434 (class 0 OID 0)
-- Dependencies: 222
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.favorites_id_seq', 347, true);


--
-- TOC entry 3435 (class 0 OID 0)
-- Dependencies: 224
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 155, true);


--
-- TOC entry 3436 (class 0 OID 0)
-- Dependencies: 218
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 62, true);


--
-- TOC entry 3437 (class 0 OID 0)
-- Dependencies: 220
-- Name: status_orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.status_orders_id_seq', 1, false);


--
-- TOC entry 3438 (class 0 OID 0)
-- Dependencies: 228
-- Name: trends_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.trends_id_seq', 14, true);


--
-- TOC entry 3439 (class 0 OID 0)
-- Dependencies: 214
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 30, true);


--
-- TOC entry 3248 (class 2606 OID 26839)
-- Name: advice advice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.advice
    ADD CONSTRAINT advice_pkey PRIMARY KEY (id);


--
-- TOC entry 3225 (class 2606 OID 26760)
-- Name: product available; Type: CHECK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE public.product
    ADD CONSTRAINT available CHECK ((available >= 0)) NOT VALID;


--
-- TOC entry 3230 (class 2606 OID 26499)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 3237 (class 2606 OID 26524)
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- TOC entry 3240 (class 2606 OID 26565)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- TOC entry 3244 (class 2606 OID 26595)
-- Name: orders_products orders_products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT orders_products_pkey PRIMARY KEY (order_id, product_id);


--
-- TOC entry 3226 (class 2606 OID 26761)
-- Name: product price; Type: CHECK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE public.product
    ADD CONSTRAINT price CHECK ((price >= 0)) NOT VALID;


--
-- TOC entry 3233 (class 2606 OID 26793)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- TOC entry 3235 (class 2606 OID 26517)
-- Name: status_orders status_orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status_orders
    ADD CONSTRAINT status_orders_pkey PRIMARY KEY (id);


--
-- TOC entry 3246 (class 2606 OID 26827)
-- Name: trends trends_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trends
    ADD CONSTRAINT trends_pkey PRIMARY KEY (id);


--
-- TOC entry 3228 (class 2606 OID 26490)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3241 (class 1259 OID 26744)
-- Name: idx_orders_products_order_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_products_order_id ON public.orders_products USING btree (order_id);


--
-- TOC entry 3242 (class 1259 OID 26745)
-- Name: idx_orders_products_product_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_products_product_id ON public.orders_products USING btree (product_id);


--
-- TOC entry 3238 (class 1259 OID 26743)
-- Name: idx_orders_users_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_users_id ON public.orders USING btree (users_id);


--
-- TOC entry 3231 (class 1259 OID 26746)
-- Name: idx_product_price; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_product_price ON public.product USING btree (price);


--
-- TOC entry 3258 (class 2606 OID 26855)
-- Name: advice advice_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.advice
    ADD CONSTRAINT advice_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;


--
-- TOC entry 3255 (class 2606 OID 26850)
-- Name: carts_users carts_users_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts_users
    ADD CONSTRAINT carts_users_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;


--
-- TOC entry 3256 (class 2606 OID 26860)
-- Name: carts_users carts_users_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts_users
    ADD CONSTRAINT carts_users_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 3249 (class 2606 OID 26870)
-- Name: favorites favorites_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;


--
-- TOC entry 3250 (class 2606 OID 26865)
-- Name: favorites favorites_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 3253 (class 2606 OID 26596)
-- Name: orders_products orders_products_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT orders_products_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- TOC entry 3254 (class 2606 OID 26845)
-- Name: orders_products orders_products_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT orders_products_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;


--
-- TOC entry 3251 (class 2606 OID 26571)
-- Name: orders orders_status_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_status_order_id_fkey FOREIGN KEY (status_order_id) REFERENCES public.status_orders(id);


--
-- TOC entry 3252 (class 2606 OID 26875)
-- Name: orders orders_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 3257 (class 2606 OID 26880)
-- Name: trends trends_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trends
    ADD CONSTRAINT trends_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;


-- Completed on 2023-11-25 15:02:00

--
-- PostgreSQL database dump complete
--

