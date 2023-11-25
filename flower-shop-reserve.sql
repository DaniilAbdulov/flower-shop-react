PGDMP       )    8            
    {            online-shop    15.2    15.2 Q    ]           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ^           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            _           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            `           1262    26480    online-shop    DATABASE     �   CREATE DATABASE "online-shop" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "online-shop";
                postgres    false            �            1259    26834    advice    TABLE     Y   CREATE TABLE public.advice (
    id integer NOT NULL,
    product_id integer NOT NULL
);
    DROP TABLE public.advice;
       public         heap    postgres    false            �            1259    26833    advice_id_seq    SEQUENCE     �   CREATE SEQUENCE public.advice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.advice_id_seq;
       public          postgres    false    231            a           0    0    advice_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.advice_id_seq OWNED BY public.advice.id;
          public          postgres    false    230            �            1259    26606    carts_users    TABLE     f   CREATE TABLE public.carts_users (
    users_id integer,
    product_id integer,
    count smallint
);
    DROP TABLE public.carts_users;
       public         heap    postgres    false            �            1259    26492    category    TABLE     V   CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying
);
    DROP TABLE public.category;
       public         heap    postgres    false            �            1259    26491    category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.category_id_seq;
       public          postgres    false    217            b           0    0    category_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
          public          postgres    false    216            �            1259    26519 	   favorites    TABLE     i   CREATE TABLE public.favorites (
    id integer NOT NULL,
    users_id integer,
    product_id integer
);
    DROP TABLE public.favorites;
       public         heap    postgres    false            �            1259    26518    favorites_id_seq    SEQUENCE     �   CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.favorites_id_seq;
       public          postgres    false    223            c           0    0    favorites_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;
          public          postgres    false    222            �            1259    26560    orders    TABLE     �   CREATE TABLE public.orders (
    id integer NOT NULL,
    users_id integer,
    date_order timestamp with time zone,
    status_order_id integer
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    26559    orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    225            d           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    224            �            1259    26591    orders_products    TABLE     |   CREATE TABLE public.orders_products (
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    count smallint
);
 #   DROP TABLE public.orders_products;
       public         heap    postgres    false            �            1259    26501    product    TABLE     �   CREATE TABLE public.product (
    id integer NOT NULL,
    title character varying,
    description character varying,
    price integer,
    available integer NOT NULL,
    img text,
    category_id integer
);
    DROP TABLE public.product;
       public         heap    postgres    false            �            1259    26500    product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.product_id_seq;
       public          postgres    false    219            e           0    0    product_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
          public          postgres    false    218            �            1259    26510    status_orders    TABLE     ]   CREATE TABLE public.status_orders (
    id integer NOT NULL,
    status character varying
);
 !   DROP TABLE public.status_orders;
       public         heap    postgres    false            �            1259    26509    status_orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.status_orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.status_orders_id_seq;
       public          postgres    false    221            f           0    0    status_orders_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.status_orders_id_seq OWNED BY public.status_orders.id;
          public          postgres    false    220            �            1259    26822    trends    TABLE     P   CREATE TABLE public.trends (
    id integer NOT NULL,
    product_id integer
);
    DROP TABLE public.trends;
       public         heap    postgres    false            �            1259    26821    trends_id_seq    SEQUENCE     �   CREATE SEQUENCE public.trends_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.trends_id_seq;
       public          postgres    false    229            g           0    0    trends_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.trends_id_seq OWNED BY public.trends.id;
          public          postgres    false    228            �            1259    26482    users    TABLE     �  CREATE TABLE public.users (
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
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    26481    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    215            h           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    214            �           2604    26837 	   advice id    DEFAULT     f   ALTER TABLE ONLY public.advice ALTER COLUMN id SET DEFAULT nextval('public.advice_id_seq'::regclass);
 8   ALTER TABLE public.advice ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    26495    category id    DEFAULT     j   ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
 :   ALTER TABLE public.category ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    26522    favorites id    DEFAULT     l   ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);
 ;   ALTER TABLE public.favorites ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    26563 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    26819 
   product id    DEFAULT     h   ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
 9   ALTER TABLE public.product ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    26513    status_orders id    DEFAULT     t   ALTER TABLE ONLY public.status_orders ALTER COLUMN id SET DEFAULT nextval('public.status_orders_id_seq'::regclass);
 ?   ALTER TABLE public.status_orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    26825 	   trends id    DEFAULT     f   ALTER TABLE ONLY public.trends ALTER COLUMN id SET DEFAULT nextval('public.trends_id_seq'::regclass);
 8   ALTER TABLE public.trends ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    26485    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            Z          0    26834    advice 
   TABLE DATA           0   COPY public.advice (id, product_id) FROM stdin;
    public          postgres    false    231   �Z       V          0    26606    carts_users 
   TABLE DATA           B   COPY public.carts_users (users_id, product_id, count) FROM stdin;
    public          postgres    false    227   �Z       L          0    26492    category 
   TABLE DATA           ,   COPY public.category (id, name) FROM stdin;
    public          postgres    false    217   ]       R          0    26519 	   favorites 
   TABLE DATA           =   COPY public.favorites (id, users_id, product_id) FROM stdin;
    public          postgres    false    223   �]       T          0    26560    orders 
   TABLE DATA           K   COPY public.orders (id, users_id, date_order, status_order_id) FROM stdin;
    public          postgres    false    225   &_       U          0    26591    orders_products 
   TABLE DATA           F   COPY public.orders_products (order_id, product_id, count) FROM stdin;
    public          postgres    false    226   �u       N          0    26501    product 
   TABLE DATA           ]   COPY public.product (id, title, description, price, available, img, category_id) FROM stdin;
    public          postgres    false    219   |       P          0    26510    status_orders 
   TABLE DATA           3   COPY public.status_orders (id, status) FROM stdin;
    public          postgres    false    221   `�       X          0    26822    trends 
   TABLE DATA           0   COPY public.trends (id, product_id) FROM stdin;
    public          postgres    false    229   ˱       J          0    26482    users 
   TABLE DATA           }   COPY public.users (id, first_name, last_name, nickname, email, password, created_at, updated_at, role, user_img) FROM stdin;
    public          postgres    false    215   H�       i           0    0    advice_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.advice_id_seq', 19, true);
          public          postgres    false    230            j           0    0    category_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.category_id_seq', 1, false);
          public          postgres    false    216            k           0    0    favorites_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.favorites_id_seq', 350, true);
          public          postgres    false    222            l           0    0    orders_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.orders_id_seq', 156, true);
          public          postgres    false    224            m           0    0    product_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.product_id_seq', 62, true);
          public          postgres    false    218            n           0    0    status_orders_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.status_orders_id_seq', 1, false);
          public          postgres    false    220            o           0    0    trends_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.trends_id_seq', 16, true);
          public          postgres    false    228            p           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 30, true);
          public          postgres    false    214            �           2606    26839    advice advice_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.advice
    ADD CONSTRAINT advice_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.advice DROP CONSTRAINT advice_pkey;
       public            postgres    false    231            �           2606    26760    product available    CHECK CONSTRAINT     \   ALTER TABLE public.product
    ADD CONSTRAINT available CHECK ((available >= 0)) NOT VALID;
 6   ALTER TABLE public.product DROP CONSTRAINT available;
       public          postgres    false    219    219            �           2606    26499    category category_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            postgres    false    217            �           2606    26524    favorites favorites_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.favorites DROP CONSTRAINT favorites_pkey;
       public            postgres    false    223            �           2606    26565    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    225            �           2606    26595 $   orders_products orders_products_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT orders_products_pkey PRIMARY KEY (order_id, product_id);
 N   ALTER TABLE ONLY public.orders_products DROP CONSTRAINT orders_products_pkey;
       public            postgres    false    226    226            �           2606    26761    product price    CHECK CONSTRAINT     T   ALTER TABLE public.product
    ADD CONSTRAINT price CHECK ((price >= 0)) NOT VALID;
 2   ALTER TABLE public.product DROP CONSTRAINT price;
       public          postgres    false    219    219            �           2606    26793    product product_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            postgres    false    219            �           2606    26517     status_orders status_orders_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.status_orders
    ADD CONSTRAINT status_orders_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.status_orders DROP CONSTRAINT status_orders_pkey;
       public            postgres    false    221            �           2606    26827    trends trends_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.trends
    ADD CONSTRAINT trends_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.trends DROP CONSTRAINT trends_pkey;
       public            postgres    false    229            �           2606    26490    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �           1259    26744    idx_orders_products_order_id    INDEX     \   CREATE INDEX idx_orders_products_order_id ON public.orders_products USING btree (order_id);
 0   DROP INDEX public.idx_orders_products_order_id;
       public            postgres    false    226            �           1259    26745    idx_orders_products_product_id    INDEX     `   CREATE INDEX idx_orders_products_product_id ON public.orders_products USING btree (product_id);
 2   DROP INDEX public.idx_orders_products_product_id;
       public            postgres    false    226            �           1259    26743    idx_orders_users_id    INDEX     J   CREATE INDEX idx_orders_users_id ON public.orders USING btree (users_id);
 '   DROP INDEX public.idx_orders_users_id;
       public            postgres    false    225            �           1259    26746    idx_product_price    INDEX     F   CREATE INDEX idx_product_price ON public.product USING btree (price);
 %   DROP INDEX public.idx_product_price;
       public            postgres    false    219            �           2606    26855    advice advice_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.advice
    ADD CONSTRAINT advice_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.advice DROP CONSTRAINT advice_product_id_fkey;
       public          postgres    false    231    3233    219            �           2606    26850 '   carts_users carts_users_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.carts_users
    ADD CONSTRAINT carts_users_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.carts_users DROP CONSTRAINT carts_users_product_id_fkey;
       public          postgres    false    219    3233    227            �           2606    26860 %   carts_users carts_users_users_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.carts_users
    ADD CONSTRAINT carts_users_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.carts_users DROP CONSTRAINT carts_users_users_id_fkey;
       public          postgres    false    215    227    3228            �           2606    26870 #   favorites favorites_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.favorites DROP CONSTRAINT favorites_product_id_fkey;
       public          postgres    false    223    3233    219            �           2606    26865 !   favorites favorites_users_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.favorites DROP CONSTRAINT favorites_users_id_fkey;
       public          postgres    false    215    3228    223            �           2606    26596 -   orders_products orders_products_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT orders_products_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id);
 W   ALTER TABLE ONLY public.orders_products DROP CONSTRAINT orders_products_order_id_fkey;
       public          postgres    false    3240    226    225            �           2606    26845 /   orders_products orders_products_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT orders_products_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.orders_products DROP CONSTRAINT orders_products_product_id_fkey;
       public          postgres    false    226    3233    219            �           2606    26571 "   orders orders_status_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_status_order_id_fkey FOREIGN KEY (status_order_id) REFERENCES public.status_orders(id);
 L   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_status_order_id_fkey;
       public          postgres    false    221    3235    225            �           2606    26875    orders orders_users_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_users_id_fkey;
       public          postgres    false    3228    215    225            �           2606    26880    trends trends_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.trends
    ADD CONSTRAINT trends_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.trends DROP CONSTRAINT trends_product_id_fkey;
       public          postgres    false    219    229    3233            Z      8	58
    12	47
    13	48
    14	13
    15	49
    16	32
    18	2
    19	4
    \.


      V      8	28	3
    5	14	3
    5	22	3
    8	24	1
    2	10	2
    9	50	2
    7	16	1
    5	27	3
    9	6	1
    2	32	4
    3	14	4
    2	50	2
    4	14	4
    2	20	4
    3	41	3
    7	43	4
    4	27	5
    4	42	1
    7	6	1
    6	24	5
    4	43	3
    6	23	5
    8	14	5
    9	16	4
    5	22	1
    10	44	3
    7	16	2
    6	12	5
    8	24	4
    7	24	2
    2	1	3
    9	26	3
    1	23	3
    4	13	2
    9	30	5
    4	44	1
    10	22	4
    8	34	5
    12	1	3
    3	50	1
    3	43	1
    3	33	6
    \.


      L      1	Букеты
    2	Уличные цветы
    3	Домашние цветы
    4	Цветы
    \.


      R   
   316	11	43
 
   317	11	42
 
   321	11	32
 	   322	3	34
 	   323	3	43
 
   324	11	16
    327	1	1
 
   329	11	22
 
   332	11	21
 
   333	11	13
 	   335	11	4
 
   337	11	35
 
   339	11	37
 	   340	11	1
 
   345	11	52
 
   347	11	47
 	   348	11	2
 	   349	11	7
 
   350	11	48
 
   286	12	11
 	   287	12	9
 	   288	12	7
 
   289	12	34
 
   290	12	16
 
   291	12	44
 
   292	12	49
 	   293	12	1
    \.


      T      1	1	2023-10-03 00:00:00+05	1
    2	3	2023-01-29 00:00:00+05	4
    3	10	2023-04-09 00:00:00+05	4
    4	9	2023-10-13 00:00:00+05	3
    5	3	2023-01-17 00:00:00+05	2
    6	5	2023-03-29 00:00:00+05	4
    7	1	2023-06-09 00:00:00+05	4
    8	9	2023-03-05 00:00:00+05	2
    9	7	2023-10-01 00:00:00+05	2
    10	1	2023-07-29 00:00:00+05	1
    11	4	2023-01-29 00:00:00+05	2
    12	1	2022-12-06 00:00:00+05	2
    13	2	2022-12-29 00:00:00+05	4
    14	7	2023-08-05 00:00:00+05	1
    15	8	2023-01-28 00:00:00+05	2
    16	10	2022-12-22 00:00:00+05	3
    17	5	2023-04-10 00:00:00+05	3
    18	3	2023-01-13 00:00:00+05	4
    19	3	2023-04-21 00:00:00+05	2
    20	9	2023-01-09 00:00:00+05	1
    21	8	2023-09-22 00:00:00+05	4
    22	4	2022-11-10 00:00:00+05	3
    23	7	2023-04-10 00:00:00+05	3
    24	6	2023-03-04 00:00:00+05	2
    25	9	2023-02-17 00:00:00+05	2
    26	4	2023-05-16 00:00:00+05	4
    27	6	2023-09-15 00:00:00+05	4
    28	10	2023-08-23 00:00:00+05	3
    29	6	2023-05-05 00:00:00+05	2
    30	10	2022-12-19 00:00:00+05	3
    31	9	2022-11-18 00:00:00+05	3
    32	3	2023-02-27 00:00:00+05	2
    33	9	2023-04-07 00:00:00+05	3
    34	3	2023-07-27 00:00:00+05	1
    35	1	2023-07-28 00:00:00+05	2
    36	9	2023-02-01 00:00:00+05	4
    37	6	2023-03-21 00:00:00+05	2
    38	7	2023-03-13 00:00:00+05	3
    39	4	2023-03-30 00:00:00+05	3
    40	1	2022-12-11 00:00:00+05	3
    41	10	2023-06-03 00:00:00+05	3
    42	9	2023-10-21 00:00:00+05	2
    43	3	2022-11-10 00:00:00+05	4
    44	7	2023-01-10 00:00:00+05	1
    45	7	2023-04-04 00:00:00+05	3
    46	1	2023-01-25 00:00:00+05	2
    47	8	2022-11-06 00:00:00+05	1
    48	4	2023-01-13 00:00:00+05	1
    49	3	2022-12-30 00:00:00+05	1
    50	9	2023-01-08 00:00:00+05	2
    51	7	2023-08-30 00:00:00+05	1
    52	7	2023-04-03 00:00:00+05	1
    53	7	2023-03-16 00:00:00+05	2
    54	10	2023-04-10 00:00:00+05	2
    55	8	2023-05-14 00:00:00+05	4
    56	7	2023-03-07 00:00:00+05	2
    57	7	2023-08-07 00:00:00+05	3
    58	6	2023-01-29 00:00:00+05	4
    59	10	2023-09-30 00:00:00+05	4
    60	10	2022-12-04 00:00:00+05	1
    61	6	2023-03-15 00:00:00+05	4
    62	1	2023-06-21 00:00:00+05	3
    63	1	2023-01-19 00:00:00+05	3
    64	10	2023-06-27 00:00:00+05	3
    65	5	2022-12-04 00:00:00+05	3
    66	4	2023-08-18 00:00:00+05	2
    67	10	2023-07-21 00:00:00+05	4
    68	5	2023-09-21 00:00:00+05	2
    69	6	2023-02-14 00:00:00+05	2
    70	5	2023-04-30 00:00:00+05	1
    71	1	2023-05-31 00:00:00+05	1
    72	6	2022-11-23 00:00:00+05	2
    73	1	2023-05-02 00:00:00+05	2
    74	6	2022-12-26 00:00:00+05	3
    75	6	2023-08-11 00:00:00+05	4
    76	1	2022-11-21 00:00:00+05	2
    77	9	2023-06-13 00:00:00+05	1
    78	6	2023-10-25 00:00:00+05	3
    79	5	2023-01-31 00:00:00+05	1
    80	9	2022-12-31 00:00:00+05	4
    81	8	2023-01-08 00:00:00+05	4
    82	10	2023-10-03 00:00:00+05	2
    83	5	2023-09-11 00:00:00+05	3
    84	3	2023-05-18 00:00:00+05	1
    85	8	2023-01-28 00:00:00+05	1
    86	7	2023-04-18 00:00:00+05	4
    87	1	2023-02-27 00:00:00+05	3
    88	6	2022-11-17 00:00:00+05	4
    89	8	2023-03-26 00:00:00+05	2
    90	7	2023-08-03 00:00:00+05	1
    91	5	2023-10-01 00:00:00+05	2
    92	3	2023-09-09 00:00:00+05	1
    93	1	2023-04-28 00:00:00+05	1
 #   94	11	2023-11-21 06:02:57.572+05	1
 #   95	11	2023-11-21 06:04:36.904+05	1
 #   96	11	2023-11-21 06:05:00.278+05	1
 #   97	11	2023-11-21 06:06:34.656+05	1
 #   98	11	2023-11-21 06:06:49.534+05	1
 #   99	11	2023-11-21 06:08:18.824+05	1
 $   100	11	2023-11-21 06:08:48.533+05	1
 $   101	11	2023-11-21 06:11:13.559+05	1
 $   102	11	2023-11-21 06:11:55.727+05	1
 $   103	11	2023-11-21 06:15:26.181+05	1
 $   104	11	2023-11-21 06:16:47.828+05	1
 $   112	11	2023-11-21 06:29:12.176+05	1
 $   113	11	2023-11-21 06:29:36.559+05	1
 $   115	11	2023-11-21 18:45:46.134+05	1
 $   116	11	2023-11-21 18:46:30.518+05	1
 $   117	11	2023-11-21 18:46:55.441+05	1
 $   118	11	2023-11-21 18:46:59.142+05	1
 $   119	11	2023-11-21 18:47:42.308+05	1
 $   120	11	2023-11-21 18:48:12.595+05	1
 $   121	11	2023-11-21 18:48:48.458+05	1
 $   122	11	2023-11-21 18:49:33.133+05	1
 $   123	11	2023-11-21 18:50:21.105+05	1
 $   124	11	2023-11-21 18:51:24.498+05	1
 $   125	11	2023-11-21 18:52:37.918+05	1
 #   127	11	2023-11-21 18:58:23.58+05	1
 $   128	11	2023-11-21 18:59:27.662+05	1
 $   129	11	2023-11-21 19:00:21.135+05	1
 $   130	11	2023-11-21 19:09:33.625+05	1
 #   132	11	2023-11-21 19:21:21.71+05	1
 $   133	11	2023-11-21 19:22:40.583+05	1
 $   134	11	2023-11-21 19:23:10.931+05	1
 $   110	11	2023-11-21 06:26:52.941+05	4
 $   106	11	2023-11-21 06:17:55.446+05	4
 $   107	11	2023-11-21 06:25:50.507+05	4
 $   108	11	2023-11-21 06:25:50.513+05	4
 $   114	11	2023-11-21 18:45:40.181+05	4
 $   111	11	2023-11-21 06:27:15.145+05	4
 $   131	11	2023-11-21 19:16:08.895+05	4
 #   109	11	2023-11-21 06:26:17.54+05	4
 $   126	11	2023-11-21 18:53:24.508+05	2
 $   135	11	2023-11-21 19:24:22.955+05	1
 $   136	11	2023-11-21 19:27:00.946+05	1
 $   137	11	2023-11-21 19:29:01.363+05	1
 #   138	11	2023-11-21 19:29:46.27+05	1
 $   139	11	2023-11-21 19:32:28.309+05	1
 #   140	11	2023-11-21 19:36:07.48+05	1
 $   141	11	2023-11-21 19:37:43.519+05	1
 #   143	11	2023-11-21 19:46:56.74+05	1
 $   145	11	2023-11-23 18:51:10.193+05	4
 $   105	11	2023-11-21 06:17:14.853+05	4
 $   146	11	2023-11-23 20:22:08.909+05	1
 $   147	11	2023-11-23 20:23:43.965+05	1
 $   148	11	2023-11-23 20:24:52.712+05	1
 #   149	11	2023-11-23 20:25:47.08+05	1
 $   150	11	2023-11-23 20:27:34.226+05	4
 #   151	11	2023-11-23 20:28:28.24+05	1
 $   152	11	2023-11-23 20:30:43.886+05	4
 $   153	11	2023-11-24 06:04:57.876+05	4
 $   142	11	2023-11-21 19:40:46.739+05	4
 $   154	11	2023-11-25 09:35:51.295+05	1
 $   155	11	2023-11-25 11:00:12.735+05	1
 $   156	11	2023-11-25 15:37:58.406+05	1
 $   144	11	2023-11-21 19:48:58.623+05	4
    \.


      U      69	2	2
    32	47	1
    38	7	2
    31	38	1
    2	18	1
    77	25	5
    85	35	3
    28	9	5
    4	46	4
    61	49	5
    58	30	1
    77	40	5
    38	24	2
    55	33	4
    25	21	4
    41	47	3
    49	40	5
    61	6	2
    73	43	6
    41	2	1
    32	25	4
    46	13	3
    43	28	5
    53	25	3
    10	18	4
    31	14	6
    65	12	4
    42	47	3
    48	7	2
    77	2	3
    46	39	1
    66	37	4
    44	1	1
    47	42	4
    65	7	3
    92	7	1
    82	47	5
    57	40	6
    29	22	1
    63	10	1
    84	27	6
    79	2	6
    33	50	1
    14	33	2
    28	10	2
    52	37	3
    25	14	4
    83	11	3
    21	35	1
    55	48	1
    56	27	6
    48	11	1
    80	24	6
    35	8	2
    13	20	2
    55	44	6
    78	25	5
    36	16	1
    43	25	5
    61	39	4
    51	7	3
    57	7	4
    62	25	5
    2	4	1
    87	46	5
    49	20	1
    25	43	4
    62	32	3
    82	30	4
    80	25	4
    26	1	5
    11	33	3
    56	4	2
    21	21	4
    38	9	2
    34	30	5
    4	21	3
    5	48	6
    83	32	1
    68	39	5
    38	38	4
    70	48	3
    42	41	6
    64	23	1
    105	1	1
    105	7	1
    106	1	1
    106	7	1
    107	1	1
    108	1	1
    107	7	1
    108	7	1
    109	1	1
    109	7	1
    110	1	1
    110	7	1
    111	1	1
    111	7	1
    126	1	1
    126	7	1
    127	1	1
    130	9	1
 	   133	23	1
    136	7	1
 	   138	17	1
 	   139	29	2
 	   141	35	1
    142	2	1
 	   143	12	2
 	   144	34	1
 	   145	40	3
    150	1	2
    151	1	3
    152	1	1
    152	7	1
 	   154	58	5
 	   155	61	1
    156	7	3
    \.


      N   �   52	Букет 2	Описание букета 2	1000	5	https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/People-arrows-solid.svg/1200px-People-arrows-solid.svg.png	1
 q   14	Cochlearius	nunc commodo placerat praesent blandit nam nulla	3350	19	https://via.placeholder.com/600/24f355	2
 n   41	Columba 	eu interdum eu tincidunt in leo maecenas pulvinar	1268	8	https://via.placeholder.com/600/24f355	2
 g   48	Buteo regalis	ac neque duis bibendum morbi non quam	9770	4	https://via.placeholder.com/600/24f355	1
 l   47	Panthera tigris	pede ac diam cras pellentesque volutpat	9133	10	https://via.placeholder.com/600/24f355	4
    44	Myotis lucifugus	turpis integer aliquet massa id lobortis convallis tortor	2934	21	https://via.placeholder.com/600/24f355	2
 k   43	Connochaetus taurinus	eleifend luctus ultricies eu nibh	9401	4	https://via.placeholder.com/600/d32776	1
 n   42	Pteropus rufus	facilisi cras non velit nec nisi vulputate	6071	27	https://via.placeholder.com/600/d32776	1
 m   39	Ara chloroptera	faucibus orci luctus et ultrices posuere	6454	18	https://via.placeholder.com/600/24f355	4
 |   38	Geococcyx californianus	tincidunt nulla mollis molestie lorem quisque ut	4651	5	https://via.placeholder.com/600/d32776	4
    33	Trachyphonus vaillantii	duis consequat dui nec nisi volutpat eleifend donec	302	22	https://via.placeholder.com/600/d32776	2
 m   31	Anser caerulescens	dui vel nisl duis ac nibh fusce lacus	3170	20	https://via.placeholder.com/600/d32776	4
 g   11	Laniarius ferrugineus	magnis dis parturient montes	9827	27	https://via.placeholder.com/600/d32776	3
 �   13	Phalacrocorax carbo	in congue etiam justo etiam pretium iaculis justo in hac	542	17	https://via.placeholder.com/600/24f355	1
 u   16	Cebus apella	porttitor pede justo eu massa donec dapibus duis at	4170	16	https://via.placeholder.com/600/24f355	4
 U   18	Ardea golieth	sem mauris laoreet	8751	28	https://via.placeholder.com/600/24f355	2
 [   20	Plegadis ridgwayi	curae mauris viverra	6070	14	https://via.placeholder.com/600/24f355	4
 �   21	Boa constrictor mexicana	ultrices phasellus id sapien in sapien iaculis congue vivamus	9123	24	https://via.placeholder.com/600/24f355	1
 �   22	Parus atricapillus	lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar	6102	5	https://via.placeholder.com/600/d32776	2
 t   49	Lorythaixoides concolor	vulputate elementum nullam varius nulla	8540	20	https://via.placeholder.com/600/24f355	2
 ~   23	Lasiodora parahybana	libero nam dui proin leo odio porttitor id consequat	5567	29	https://via.placeholder.com/600/24f355	3
 s   35	Corythornis cristata	erat id mauris vulputate elementum nullam	3191	25	https://via.placeholder.com/600/24f355	1
 o   37	Hystrix indica	aliquam non mauris morbi non lectus aliquam	9915	28	https://via.placeholder.com/600/24f355	1
 Y   46	Trichoglossus	fusce posuere felis sed	7567	4	https://via.placeholder.com/600/24f355	4
 R   32	Varanus sp.	nec nisi volutpat	5000	10	https://via.placeholder.com/600/d32776	4
 d   12	Acanthaster planci	ipsum primis in faucibus orci	1176	8	https://via.placeholder.com/600/d32776	4
 q   34	Crotalus cerastes	pharetra magna ac consequat metus sapien ut	341	29	https://via.placeholder.com/600/24f355	1
 h   17	Boa constrictor mexicana	leo rhoncus sed vestibulum	9378	29	https://via.placeholder.com/600/24f355	1
 �   61	Букетик	Описанице	12000	15	https://img.freepik.com/premium-photo/white-pink-peonies-opened-blossoms-bunch-wallpaper_208581-1967.jpg?size=626&ext=jpg&ga=GA1.1.857530799.1699784929&semt=sph	1
    40	Gymnorhina tibicen	lorem ipsum dolor sit amet consectetuer adipiscing elit	7062	16	https://via.placeholder.com/600/24f355	3
   1	Gopherus agassizii	lobortis vel dapibus at diam	8067	14	https://lh3.googleusercontent.com/pw/ADCreHcbwkcPJUrPtiX2K0N_H1qfv3v2q5x0_viMjcGgLQCY22ASQf8mm-YiNKs7PtND_DNCno_-Y9Xd9hZVSWcQLqXcWsAubR0RT5VjiIrAobMuZKozsi-1SxKex97giA2IwKi7SguTp4SP7HdHwgk3iPvKDLt1OexMSOkHhvtC2XqaxP4ABVl4TuN8-rJRlrNgwRe35tGYysRd3IpdWbwH5i2F55iUgFL6RNzWrbkeVJ2TMtSYOlUFXtvg2Z6ArA4rMUSb9-uW9X6F23EvAfG0J6Ai6VfdOcKSXjP8I77f9i5CGVp2GXJOHPN6rxeMnEe6b6A7UybE-TY_Glx5BTcaNseh3_6pFpxRPI5SthbzYhaAuBOY4BqqGUYE23DGQMrZ764tir5eRBkGgHMOXW2wGDkFPHh8W9295LxQWZ6XKfeKKslITGiYPgHnrMbEjbj1rcX2IL19Hz8BleNcvsnljRDP7SIwm72b5IWMg7aBAS8D_uiA7ZmCkhu17I8NY5Y-avaXqqImlonU6KwD7sKRar8fXRgzFiQ7muHz9ZinBCoFmHWOSKvhYxM_zMcgamFjCOosjpsoBHRUirnBvk9hOB6pQAOtEqdax6u5qcxuwT-VPA_ZU8BV9ik_ThcHQYQHJtlKa3gs6kI_eXNoWwnYcuKV9A2SaI9MgUdIpfI6UDlmkOdOhp869_QDWBTsSPZpCBwn6hmqFydU6HmdxBjhCy7MZXalkTei7A35Bik95ieae5jLCuY-1xL_Ugk87_rUlXef5gyWfQNzFFbhnfWeqfYUcj0XIS_Ad8AQCAZhEidRd8LnLzk0yXGUXXtpSg3eCSxNpEQBaI-2Ijyj3zKykhJCef47dhvJG7_JoHRKa8wz0wnpnQvaUcw3kyUxbzTr8QLP=w826-h1089-s-no-gm?authuser=0	4
 �   24	Morelia spilotes variegata	sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt	4617	2	https://via.placeholder.com/600/24f355	4
 w   25	Nesomimus trifasciatus	cursus vestibulum proin eu mi nulla ac enim	9643	28	https://via.placeholder.com/600/d32776	1
 o   26	Climacteris melanura	elementum nullam varius nulla facilisi	6343	9	https://via.placeholder.com/600/24f355	2
 a   27	Speothos vanaticus	parturient montes nascetur	6611	7	https://via.placeholder.com/600/d32776	3
 _   28	Microcebus murinus	lobortis ligula sit amet	1398	5	https://via.placeholder.com/600/d32776	4
 j   30	Lamprotornis sp.	integer ac neque duis bibendum morbi	4066	30	https://via.placeholder.com/600/24f355	2
 t   50	Cacatua galerita	a pede posuere nonummy integer non velit donec	7232	10	https://via.placeholder.com/600/24f355	1
 d   29	Anser caerulescens	magnis dis parturient montes	2824	12	https://via.placeholder.com/600/d32776	1
 �   53	Букет 2	Описание букета 2	1000	6	https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/People-arrows-solid.svg/1200px-People-arrows-solid.svg.png	1
 �   60	Example	Example Example 3	600	12	https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/People-arrows-solid.svg/1200px-People-arrows-solid.svg.png	1
 �   58	Букет №5	Описание букета №5	900	0	https://img.freepik.com/premium-photo/white-pink-peonies-opened-blossoms-bunch-wallpaper_208581-1967.jpg?size=626&ext=jpg&ga=GA1.1.857530799.1699784929&semt=sph	2
 q   62	Cochlearius	nunc commodo placerat praesent blandit nam nulla	3350	19	https://via.placeholder.com/600/24f355	2
   2	Madoqua kirkii	sagittis sapien cum sociis natoque penatibus et	6618	20	https://lh3.googleusercontent.com/pw/ADCreHcbwkcPJUrPtiX2K0N_H1qfv3v2q5x0_viMjcGgLQCY22ASQf8mm-YiNKs7PtND_DNCno_-Y9Xd9hZVSWcQLqXcWsAubR0RT5VjiIrAobMuZKozsi-1SxKex97giA2IwKi7SguTp4SP7HdHwgk3iPvKDLt1OexMSOkHhvtC2XqaxP4ABVl4TuN8-rJRlrNgwRe35tGYysRd3IpdWbwH5i2F55iUgFL6RNzWrbkeVJ2TMtSYOlUFXtvg2Z6ArA4rMUSb9-uW9X6F23EvAfG0J6Ai6VfdOcKSXjP8I77f9i5CGVp2GXJOHPN6rxeMnEe6b6A7UybE-TY_Glx5BTcaNseh3_6pFpxRPI5SthbzYhaAuBOY4BqqGUYE23DGQMrZ764tir5eRBkGgHMOXW2wGDkFPHh8W9295LxQWZ6XKfeKKslITGiYPgHnrMbEjbj1rcX2IL19Hz8BleNcvsnljRDP7SIwm72b5IWMg7aBAS8D_uiA7ZmCkhu17I8NY5Y-avaXqqImlonU6KwD7sKRar8fXRgzFiQ7muHz9ZinBCoFmHWOSKvhYxM_zMcgamFjCOosjpsoBHRUirnBvk9hOB6pQAOtEqdax6u5qcxuwT-VPA_ZU8BV9ik_ThcHQYQHJtlKa3gs6kI_eXNoWwnYcuKV9A2SaI9MgUdIpfI6UDlmkOdOhp869_QDWBTsSPZpCBwn6hmqFydU6HmdxBjhCy7MZXalkTei7A35Bik95ieae5jLCuY-1xL_Ugk87_rUlXef5gyWfQNzFFbhnfWeqfYUcj0XIS_Ad8AQCAZhEidRd8LnLzk0yXGUXXtpSg3eCSxNpEQBaI-2Ijyj3zKykhJCef47dhvJG7_JoHRKa8wz0wnpnQvaUcw3kyUxbzTr8QLP=w826-h1089-s-no-gm?authuser=0	3
   4	Sarkidornis melanotos	odio donec vitae nisi nam ultrices libero	3521	23	https://lh3.googleusercontent.com/pw/ADCreHcbwkcPJUrPtiX2K0N_H1qfv3v2q5x0_viMjcGgLQCY22ASQf8mm-YiNKs7PtND_DNCno_-Y9Xd9hZVSWcQLqXcWsAubR0RT5VjiIrAobMuZKozsi-1SxKex97giA2IwKi7SguTp4SP7HdHwgk3iPvKDLt1OexMSOkHhvtC2XqaxP4ABVl4TuN8-rJRlrNgwRe35tGYysRd3IpdWbwH5i2F55iUgFL6RNzWrbkeVJ2TMtSYOlUFXtvg2Z6ArA4rMUSb9-uW9X6F23EvAfG0J6Ai6VfdOcKSXjP8I77f9i5CGVp2GXJOHPN6rxeMnEe6b6A7UybE-TY_Glx5BTcaNseh3_6pFpxRPI5SthbzYhaAuBOY4BqqGUYE23DGQMrZ764tir5eRBkGgHMOXW2wGDkFPHh8W9295LxQWZ6XKfeKKslITGiYPgHnrMbEjbj1rcX2IL19Hz8BleNcvsnljRDP7SIwm72b5IWMg7aBAS8D_uiA7ZmCkhu17I8NY5Y-avaXqqImlonU6KwD7sKRar8fXRgzFiQ7muHz9ZinBCoFmHWOSKvhYxM_zMcgamFjCOosjpsoBHRUirnBvk9hOB6pQAOtEqdax6u5qcxuwT-VPA_ZU8BV9ik_ThcHQYQHJtlKa3gs6kI_eXNoWwnYcuKV9A2SaI9MgUdIpfI6UDlmkOdOhp869_QDWBTsSPZpCBwn6hmqFydU6HmdxBjhCy7MZXalkTei7A35Bik95ieae5jLCuY-1xL_Ugk87_rUlXef5gyWfQNzFFbhnfWeqfYUcj0XIS_Ad8AQCAZhEidRd8LnLzk0yXGUXXtpSg3eCSxNpEQBaI-2Ijyj3zKykhJCef47dhvJG7_JoHRKa8wz0wnpnQvaUcw3kyUxbzTr8QLP=w826-h1089-s-no-gm?authuser=0	1
   6	unavailable	a suscipit nulla elit ac nulla sed vel enim	4446	4	https://lh3.googleusercontent.com/pw/ADCreHcbwkcPJUrPtiX2K0N_H1qfv3v2q5x0_viMjcGgLQCY22ASQf8mm-YiNKs7PtND_DNCno_-Y9Xd9hZVSWcQLqXcWsAubR0RT5VjiIrAobMuZKozsi-1SxKex97giA2IwKi7SguTp4SP7HdHwgk3iPvKDLt1OexMSOkHhvtC2XqaxP4ABVl4TuN8-rJRlrNgwRe35tGYysRd3IpdWbwH5i2F55iUgFL6RNzWrbkeVJ2TMtSYOlUFXtvg2Z6ArA4rMUSb9-uW9X6F23EvAfG0J6Ai6VfdOcKSXjP8I77f9i5CGVp2GXJOHPN6rxeMnEe6b6A7UybE-TY_Glx5BTcaNseh3_6pFpxRPI5SthbzYhaAuBOY4BqqGUYE23DGQMrZ764tir5eRBkGgHMOXW2wGDkFPHh8W9295LxQWZ6XKfeKKslITGiYPgHnrMbEjbj1rcX2IL19Hz8BleNcvsnljRDP7SIwm72b5IWMg7aBAS8D_uiA7ZmCkhu17I8NY5Y-avaXqqImlonU6KwD7sKRar8fXRgzFiQ7muHz9ZinBCoFmHWOSKvhYxM_zMcgamFjCOosjpsoBHRUirnBvk9hOB6pQAOtEqdax6u5qcxuwT-VPA_ZU8BV9ik_ThcHQYQHJtlKa3gs6kI_eXNoWwnYcuKV9A2SaI9MgUdIpfI6UDlmkOdOhp869_QDWBTsSPZpCBwn6hmqFydU6HmdxBjhCy7MZXalkTei7A35Bik95ieae5jLCuY-1xL_Ugk87_rUlXef5gyWfQNzFFbhnfWeqfYUcj0XIS_Ad8AQCAZhEidRd8LnLzk0yXGUXXtpSg3eCSxNpEQBaI-2Ijyj3zKykhJCef47dhvJG7_JoHRKa8wz0wnpnQvaUcw3kyUxbzTr8QLP=w826-h1089-s-no-gm?authuser=0	2
   8	Naja haje	ultrices erat tortor sollicitudin mi sit amet	5009	3	https://lh3.googleusercontent.com/pw/ADCreHcbwkcPJUrPtiX2K0N_H1qfv3v2q5x0_viMjcGgLQCY22ASQf8mm-YiNKs7PtND_DNCno_-Y9Xd9hZVSWcQLqXcWsAubR0RT5VjiIrAobMuZKozsi-1SxKex97giA2IwKi7SguTp4SP7HdHwgk3iPvKDLt1OexMSOkHhvtC2XqaxP4ABVl4TuN8-rJRlrNgwRe35tGYysRd3IpdWbwH5i2F55iUgFL6RNzWrbkeVJ2TMtSYOlUFXtvg2Z6ArA4rMUSb9-uW9X6F23EvAfG0J6Ai6VfdOcKSXjP8I77f9i5CGVp2GXJOHPN6rxeMnEe6b6A7UybE-TY_Glx5BTcaNseh3_6pFpxRPI5SthbzYhaAuBOY4BqqGUYE23DGQMrZ764tir5eRBkGgHMOXW2wGDkFPHh8W9295LxQWZ6XKfeKKslITGiYPgHnrMbEjbj1rcX2IL19Hz8BleNcvsnljRDP7SIwm72b5IWMg7aBAS8D_uiA7ZmCkhu17I8NY5Y-avaXqqImlonU6KwD7sKRar8fXRgzFiQ7muHz9ZinBCoFmHWOSKvhYxM_zMcgamFjCOosjpsoBHRUirnBvk9hOB6pQAOtEqdax6u5qcxuwT-VPA_ZU8BV9ik_ThcHQYQHJtlKa3gs6kI_eXNoWwnYcuKV9A2SaI9MgUdIpfI6UDlmkOdOhp869_QDWBTsSPZpCBwn6hmqFydU6HmdxBjhCy7MZXalkTei7A35Bik95ieae5jLCuY-1xL_Ugk87_rUlXef5gyWfQNzFFbhnfWeqfYUcj0XIS_Ad8AQCAZhEidRd8LnLzk0yXGUXXtpSg3eCSxNpEQBaI-2Ijyj3zKykhJCef47dhvJG7_JoHRKa8wz0wnpnQvaUcw3kyUxbzTr8QLP=w826-h1089-s-no-gm?authuser=0	4
   9	Rhea americana	volutpat in congue etiam justo etiam pretium	2510	14	https://lh3.googleusercontent.com/pw/ADCreHcbwkcPJUrPtiX2K0N_H1qfv3v2q5x0_viMjcGgLQCY22ASQf8mm-YiNKs7PtND_DNCno_-Y9Xd9hZVSWcQLqXcWsAubR0RT5VjiIrAobMuZKozsi-1SxKex97giA2IwKi7SguTp4SP7HdHwgk3iPvKDLt1OexMSOkHhvtC2XqaxP4ABVl4TuN8-rJRlrNgwRe35tGYysRd3IpdWbwH5i2F55iUgFL6RNzWrbkeVJ2TMtSYOlUFXtvg2Z6ArA4rMUSb9-uW9X6F23EvAfG0J6Ai6VfdOcKSXjP8I77f9i5CGVp2GXJOHPN6rxeMnEe6b6A7UybE-TY_Glx5BTcaNseh3_6pFpxRPI5SthbzYhaAuBOY4BqqGUYE23DGQMrZ764tir5eRBkGgHMOXW2wGDkFPHh8W9295LxQWZ6XKfeKKslITGiYPgHnrMbEjbj1rcX2IL19Hz8BleNcvsnljRDP7SIwm72b5IWMg7aBAS8D_uiA7ZmCkhu17I8NY5Y-avaXqqImlonU6KwD7sKRar8fXRgzFiQ7muHz9ZinBCoFmHWOSKvhYxM_zMcgamFjCOosjpsoBHRUirnBvk9hOB6pQAOtEqdax6u5qcxuwT-VPA_ZU8BV9ik_ThcHQYQHJtlKa3gs6kI_eXNoWwnYcuKV9A2SaI9MgUdIpfI6UDlmkOdOhp869_QDWBTsSPZpCBwn6hmqFydU6HmdxBjhCy7MZXalkTei7A35Bik95ieae5jLCuY-1xL_Ugk87_rUlXef5gyWfQNzFFbhnfWeqfYUcj0XIS_Ad8AQCAZhEidRd8LnLzk0yXGUXXtpSg3eCSxNpEQBaI-2Ijyj3zKykhJCef47dhvJG7_JoHRKa8wz0wnpnQvaUcw3kyUxbzTr8QLP=w826-h1089-s-no-gm?authuser=0	1
   10	Nannopterum harrisi	lacus morbi sem mauris laoreet ut rhoncus aliquet	472	7	https://lh3.googleusercontent.com/pw/ADCreHcbwkcPJUrPtiX2K0N_H1qfv3v2q5x0_viMjcGgLQCY22ASQf8mm-YiNKs7PtND_DNCno_-Y9Xd9hZVSWcQLqXcWsAubR0RT5VjiIrAobMuZKozsi-1SxKex97giA2IwKi7SguTp4SP7HdHwgk3iPvKDLt1OexMSOkHhvtC2XqaxP4ABVl4TuN8-rJRlrNgwRe35tGYysRd3IpdWbwH5i2F55iUgFL6RNzWrbkeVJ2TMtSYOlUFXtvg2Z6ArA4rMUSb9-uW9X6F23EvAfG0J6Ai6VfdOcKSXjP8I77f9i5CGVp2GXJOHPN6rxeMnEe6b6A7UybE-TY_Glx5BTcaNseh3_6pFpxRPI5SthbzYhaAuBOY4BqqGUYE23DGQMrZ764tir5eRBkGgHMOXW2wGDkFPHh8W9295LxQWZ6XKfeKKslITGiYPgHnrMbEjbj1rcX2IL19Hz8BleNcvsnljRDP7SIwm72b5IWMg7aBAS8D_uiA7ZmCkhu17I8NY5Y-avaXqqImlonU6KwD7sKRar8fXRgzFiQ7muHz9ZinBCoFmHWOSKvhYxM_zMcgamFjCOosjpsoBHRUirnBvk9hOB6pQAOtEqdax6u5qcxuwT-VPA_ZU8BV9ik_ThcHQYQHJtlKa3gs6kI_eXNoWwnYcuKV9A2SaI9MgUdIpfI6UDlmkOdOhp869_QDWBTsSPZpCBwn6hmqFydU6HmdxBjhCy7MZXalkTei7A35Bik95ieae5jLCuY-1xL_Ugk87_rUlXef5gyWfQNzFFbhnfWeqfYUcj0XIS_Ad8AQCAZhEidRd8LnLzk0yXGUXXtpSg3eCSxNpEQBaI-2Ijyj3zKykhJCef47dhvJG7_JoHRKa8wz0wnpnQvaUcw3kyUxbzTr8QLP=w826-h1089-s-no-gm?authuser=0	2
   7	Terathopius ecaudatus	vitae ipsum aliquam	1015	17	https://lh3.googleusercontent.com/pw/ADCreHcbwkcPJUrPtiX2K0N_H1qfv3v2q5x0_viMjcGgLQCY22ASQf8mm-YiNKs7PtND_DNCno_-Y9Xd9hZVSWcQLqXcWsAubR0RT5VjiIrAobMuZKozsi-1SxKex97giA2IwKi7SguTp4SP7HdHwgk3iPvKDLt1OexMSOkHhvtC2XqaxP4ABVl4TuN8-rJRlrNgwRe35tGYysRd3IpdWbwH5i2F55iUgFL6RNzWrbkeVJ2TMtSYOlUFXtvg2Z6ArA4rMUSb9-uW9X6F23EvAfG0J6Ai6VfdOcKSXjP8I77f9i5CGVp2GXJOHPN6rxeMnEe6b6A7UybE-TY_Glx5BTcaNseh3_6pFpxRPI5SthbzYhaAuBOY4BqqGUYE23DGQMrZ764tir5eRBkGgHMOXW2wGDkFPHh8W9295LxQWZ6XKfeKKslITGiYPgHnrMbEjbj1rcX2IL19Hz8BleNcvsnljRDP7SIwm72b5IWMg7aBAS8D_uiA7ZmCkhu17I8NY5Y-avaXqqImlonU6KwD7sKRar8fXRgzFiQ7muHz9ZinBCoFmHWOSKvhYxM_zMcgamFjCOosjpsoBHRUirnBvk9hOB6pQAOtEqdax6u5qcxuwT-VPA_ZU8BV9ik_ThcHQYQHJtlKa3gs6kI_eXNoWwnYcuKV9A2SaI9MgUdIpfI6UDlmkOdOhp869_QDWBTsSPZpCBwn6hmqFydU6HmdxBjhCy7MZXalkTei7A35Bik95ieae5jLCuY-1xL_Ugk87_rUlXef5gyWfQNzFFbhnfWeqfYUcj0XIS_Ad8AQCAZhEidRd8LnLzk0yXGUXXtpSg3eCSxNpEQBaI-2Ijyj3zKykhJCef47dhvJG7_JoHRKa8wz0wnpnQvaUcw3kyUxbzTr8QLP=w826-h1089-s-no-gm?authuser=0	3
    \.


      P      1	Создан
    2	Получен
    3	Оплачен
    4	Отменен
    \.


      X      3	58
    5	61
    8	41
    9	47
    10	48
    11	13
    12	12
    13	32
    15	2
    16	4
    \.


      J   �   1	Theodor	Waterland	mwaterland0	mwaterland0@hatena.ne.jp	nE5{zsMsm+a\\/m/	2023-04-07 00:00:00+05	2023-09-05 00:00:00+05	USER	\N
 q   2	Jacklin	Marney	vmarney1	vmarney1@prlog.org	gY3@OQ6i>2)cM	2023-02-01 00:00:00+05	2023-05-04 00:00:00+05	USER	\N
 h   3	Aviva	Alf	galf2	galf2@utexas.edu	nR1|m(Mg>y%+"`	2023-05-09 00:00:00+05	2022-06-12 00:00:00+05	USER	\N
 }   4	Uriah	Dovinson	ldovinson3	ldovinson3@craigslist.org	yP5_@,2,E}?`KtPs	2023-02-09 00:00:00+05	2023-02-01 00:00:00+05	USER	\N
 q   5	Brade	O'Cannan	tocannan4	tocannan4@booking.com	fB3{py039	2023-05-10 00:00:00+05	2023-03-03 00:00:00+05	USER	\N
 p   6	Heddi	Barca	lbarca5	lbarca5@meetup.com	pR8!Q67PtfUK#a0+	2023-04-11 00:00:00+05	2023-05-01 00:00:00+05	USER	\N
 {   7	Edgar	Haggerty	dhaggerty6	dhaggerty6@redcross.org	tJ6|eqtTJB~mmN*r	2023-06-08 00:00:00+05	2023-07-05 00:00:00+05	USER	\N
 w   8	Nissa	Schooley	sschooley7	sschooley7@angelfire.com	rE1~pp<F9!k	2023-07-07 00:00:00+05	2022-06-12 00:00:00+05	USER	\N
 �   9	Tammi	Andrzejewski	tandrzejewski8	tandrzejewski8@seattletimes.com	tB0(FQ&d(._?K3	2022-06-12 00:00:00+05	2022-06-11 00:00:00+05	USER	\N
 }   10	Rhodie	Morilla	ymorilla9	ymorilla9@huffingtonpost.com	zW3/$CS>a'uWj	2022-02-12 00:00:00+05	2022-04-11 00:00:00+05	USER	\N
 �   11	Daniil	Abdulov	abdulovdb	abdulov.dany@yandex.ru	1234	2022-02-12 00:00:00+05	2022-04-11 00:00:00+05	ADMIN	https://avatars.githubusercontent.com/u/118374108?v=4
 �   18	Daniil	Latifi	DogGGG	abdulov@yandex.ru	$2b$05$cGJzn9ik0LtP5WBuC9IiDuvCduyQ.s.DHvmgle7DwwSxzMrIzQMpK	2023-11-06 13:55:43.255+05	2023-11-06 13:55:43.255+05	USER	
 �   19	Ilir	Русланов	DogGG	dmx@gmail.com	$2b$05$uRnALMsDUMbgHKLeUnrTDOpSVhdnoU4EI2oPF.UfLeD9jTo1T0IMy	2023-11-06 13:56:58.661+05	2023-11-06 13:56:58.661+05	USER	
 �   20	Daniil	Русланов	GGGf	a@aff	$2b$05$wjid/nwexZbzUb6rW.wqGO2oDeRTADKE2KyCBjeCz2RjnyfUvIIxe	2023-11-06 14:45:38.968+05	2023-11-06 14:45:38.968+05	USER	
 �   21	Daniil	 a	abdulovdbff	ffasf@fdsf	$2b$05$E7CYEdILBKyjjYJUIzq2UO.DtSIs58A/Gowy94/DoeoeQt7K7mrXq	2023-11-06 14:46:54.79+05	2023-11-06 14:46:54.79+05	USER	
 �   22	Daniil	Руслановff	ffdasf	asfaf@dsf	$2b$05$dJ9PVyvxwQlOjjUffdBG.e6R4Chlg/hs/CmAuO8JmIa0KPlfuZGiW	2023-11-06 14:48:52.502+05	2023-11-06 14:48:52.502+05	USER	
 �   23	Daniil	Русланов	123	a@a123	$2b$05$D2lNWxSH6.WLPOfREX2WbOmllxtfuYhYn/ZO0HG27UrwOwPzgde2q	2023-11-06 14:53:25.24+05	2023-11-06 14:53:25.24+05	USER	
 �   24	Ilir	Русланов	DDDggg	gg@gg	$2b$05$vj84W1VhT8rDBQ5dH3sv1ewh0fr.adacg9QptOGE6UyMGRV9b9Kly	2023-11-06 14:55:15.479+05	2023-11-06 14:55:15.479+05	USER	
 �   25	Daniil	Latifi	Dogfa	fa@fa	$2b$05$cbPelxHMjXruXYSiZtajN.AFciHvR1Dn5Z0eDqcOnaoYOU5kDosIW	2023-11-06 14:57:53.455+05	2023-11-06 14:57:53.455+05	USER	
 �   26	Daniil	Руслановa	aa	abdulovdb@gmail.com	$2b$05$itVpTEzgzojWMZlHfLudhexnGijIt6SDlG8/kmtk500Jaonjky1JK	2023-11-06 15:15:56.727+05	2023-11-06 15:15:56.727+05	USER	
 �   27	Ilir	Русланов	abdulovdbDOGG	DOGG@mail.ru	$2b$05$uSZWVa.5KE.1GN1NiWmqTueeTAPzshzE1g283R0ipoYylrZi8c1r2	2023-11-06 18:01:26.284+05	2023-11-06 18:01:26.284+05	USER	
 �   28	Ilir	Abdulov	DMX	dmx@yandex.ru	$2b$05$euj3DQqA7C1fsnCQ71aJfu0QQH8cmSOiH7QEObUi73c4jtX.ociwq	2023-11-06 18:07:32.615+05	2023-11-06 18:07:32.615+05	USER	
 �   29	Кирилл	Мефодий	kirya	kirya@meph.com	$2b$05$nG6PVsTH4kSri7sd5Xx8MOKs88jo6mn2dnKmQB4.eNRjWK2IRNzkG	2023-11-07 05:40:02.317+05	2023-11-07 05:40:02.317+05	USER	
 �   30	Daniil	Latifi	DogFFF	abdulovff.dany@yandex.ru	$2b$05$4UmPFl/vCZkGQqLcY2i6wuzV6K.a2uX9Yx1ftA9TkTA1XDvxCY/Bi	2023-11-07 05:53:32.108+05	2023-11-07 05:53:32.108+05	USER	
 h   12	Rhodie	Morilla	abd	ymola9@huffingtost.com	1234	2022-02-12 00:00:00+05	2022-04-11 00:00:00+05	USER	\N
    \.


     