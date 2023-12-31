PGDMP                         {            online-shop    15.2    15.2 S    _           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            `           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            a           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            b           1262    26480    online-shop    DATABASE     �   CREATE DATABASE "online-shop" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
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
       public          postgres    false    231            c           0    0    advice_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.advice_id_seq OWNED BY public.advice.id;
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
       public          postgres    false    217            d           0    0    category_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
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
       public          postgres    false    223            e           0    0    favorites_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;
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
       public          postgres    false    225            f           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
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
       public          postgres    false    219            g           0    0    product_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
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
       public          postgres    false    221            h           0    0    status_orders_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.status_orders_id_seq OWNED BY public.status_orders.id;
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
       public          postgres    false    229            i           0    0    trends_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.trends_id_seq OWNED BY public.trends.id;
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
       public          postgres    false    215            j           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    214            �           2604    26837 	   advice id    DEFAULT     f   ALTER TABLE ONLY public.advice ALTER COLUMN id SET DEFAULT nextval('public.advice_id_seq'::regclass);
 8   ALTER TABLE public.advice ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    231    231            �           2604    26495    category id    DEFAULT     j   ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
 :   ALTER TABLE public.category ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    26522    favorites id    DEFAULT     l   ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);
 ;   ALTER TABLE public.favorites ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    26563 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    26819 
   product id    DEFAULT     h   ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
 9   ALTER TABLE public.product ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    26513    status_orders id    DEFAULT     t   ALTER TABLE ONLY public.status_orders ALTER COLUMN id SET DEFAULT nextval('public.status_orders_id_seq'::regclass);
 ?   ALTER TABLE public.status_orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    26825 	   trends id    DEFAULT     f   ALTER TABLE ONLY public.trends ALTER COLUMN id SET DEFAULT nextval('public.trends_id_seq'::regclass);
 8   ALTER TABLE public.trends ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    26485    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            \          0    26834    advice 
   TABLE DATA           0   COPY public.advice (id, product_id) FROM stdin;
    public          postgres    false    231   ]       X          0    26606    carts_users 
   TABLE DATA           B   COPY public.carts_users (users_id, product_id, count) FROM stdin;
    public          postgres    false    227   f]       N          0    26492    category 
   TABLE DATA           ,   COPY public.category (id, name) FROM stdin;
    public          postgres    false    217   �]       T          0    26519 	   favorites 
   TABLE DATA           =   COPY public.favorites (id, users_id, product_id) FROM stdin;
    public          postgres    false    223   �]       V          0    26560    orders 
   TABLE DATA           K   COPY public.orders (id, users_id, date_order, status_order_id) FROM stdin;
    public          postgres    false    225   _^       W          0    26591    orders_products 
   TABLE DATA           F   COPY public.orders_products (order_id, product_id, count) FROM stdin;
    public          postgres    false    226   wa       P          0    26501    product 
   TABLE DATA           ]   COPY public.product (id, title, description, price, available, img, category_id) FROM stdin;
    public          postgres    false    219   Qb       R          0    26510    status_orders 
   TABLE DATA           3   COPY public.status_orders (id, status) FROM stdin;
    public          postgres    false    221   �m       Z          0    26822    trends 
   TABLE DATA           0   COPY public.trends (id, product_id) FROM stdin;
    public          postgres    false    229   �m       L          0    26482    users 
   TABLE DATA           }   COPY public.users (id, first_name, last_name, nickname, email, password, created_at, updated_at, role, user_img) FROM stdin;
    public          postgres    false    215   ,n       k           0    0    advice_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.advice_id_seq', 33, true);
          public          postgres    false    230            l           0    0    category_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.category_id_seq', 19, true);
          public          postgres    false    216            m           0    0    favorites_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.favorites_id_seq', 421, true);
          public          postgres    false    222            n           0    0    orders_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.orders_id_seq', 238, true);
          public          postgres    false    224            o           0    0    product_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.product_id_seq', 73, true);
          public          postgres    false    218            p           0    0    status_orders_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.status_orders_id_seq', 1, false);
          public          postgres    false    220            q           0    0    trends_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.trends_id_seq', 33, true);
          public          postgres    false    228            r           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 39, true);
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
       public            postgres    false    215            �           1259    27161    fki_category    INDEX     G   CREATE INDEX fki_category ON public.product USING btree (category_id);
     DROP INDEX public.fki_category;
       public            postgres    false    219            �           1259    26744    idx_orders_products_order_id    INDEX     \   CREATE INDEX idx_orders_products_order_id ON public.orders_products USING btree (order_id);
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
       public          postgres    false    219    231    3234            �           2606    26850 '   carts_users carts_users_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.carts_users
    ADD CONSTRAINT carts_users_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.carts_users DROP CONSTRAINT carts_users_product_id_fkey;
       public          postgres    false    219    3234    227            �           2606    26860 %   carts_users carts_users_users_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.carts_users
    ADD CONSTRAINT carts_users_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.carts_users DROP CONSTRAINT carts_users_users_id_fkey;
       public          postgres    false    227    3228    215            �           2606    26870 #   favorites favorites_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.favorites DROP CONSTRAINT favorites_product_id_fkey;
       public          postgres    false    3234    219    223            �           2606    26865 !   favorites favorites_users_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.favorites DROP CONSTRAINT favorites_users_id_fkey;
       public          postgres    false    3228    215    223            �           2606    27172    product fk_category_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES public.category(id) ON DELETE CASCADE;
 @   ALTER TABLE ONLY public.product DROP CONSTRAINT fk_category_id;
       public          postgres    false    217    3230    219            �           2606    27020 -   orders_products orders_products_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT orders_products_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE CASCADE;
 W   ALTER TABLE ONLY public.orders_products DROP CONSTRAINT orders_products_order_id_fkey;
       public          postgres    false    226    3241    225            �           2606    27015 /   orders_products orders_products_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT orders_products_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.orders_products DROP CONSTRAINT orders_products_product_id_fkey;
       public          postgres    false    226    3234    219            �           2606    26571 "   orders orders_status_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_status_order_id_fkey FOREIGN KEY (status_order_id) REFERENCES public.status_orders(id);
 L   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_status_order_id_fkey;
       public          postgres    false    225    3236    221            �           2606    26875    orders orders_users_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_users_id_fkey;
       public          postgres    false    215    225    3228            �           2606    26880    trends trends_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.trends
    ADD CONSTRAINT trends_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.trends DROP CONSTRAINT trends_product_id_fkey;
       public          postgres    false    219    229    3234            \   >   x����0�7Ӌ;�.��FO�ae���
J���,*��FLtc�^�K���?��       X      x������ � �      N   f   x�3�0�b�]�^l���e�ya��v\l���b���
�.l��s^�ra߅=6\츰��TY���C3�3.6^�u��b��&�8P�D�=... 2oG�      T   V   x�%��� C�3*&�E�%������58���x�<[b�N+A3)g���k�λ����J�u��U�%-�� �F�E����9�_      V     x�m�M�+;�ǝUd�Ԗ���r���w�
Պm)����9BV��pe�%�e{S��N����W����hg�O�B>�!0���w���d)쒌��$.Μ���M�Y{�F���1�[�Mx�]q�>L��A�܋kO�WFg����	��جR�?�;C>�Kk�t��"����D�A�Q�,��)�(}Rf�_L{�>���B���ia0RFY^��`ql���T)&�Cֿ�5�4B>h�x���>R��P�_��T���Om�]$j�ϴ��ȴ�H2�z��+f��ئ#��E%�56������Ʀ��AGM�M`l6.b#s�v��S�{\46��įQ�2���c!1�<���Cyc��{Q�i0���:�Bc,q(4%b�>��!�VZ�O>NJ�E�8.;C|�ќ���VS���q����}���#k�Cs��T���jg�|��f��3��t$s�̝�S;>h��\�z��/�=�C�_���F՝�%�v�{k��E��O�cg�G~�񝁵@���X��o��<a���C\+X�dVˌ%��aׇ�����ձ�Fɴ�i���0[��p�y�p�ת��S	�����Ӻ�5N`��9�)X�~yjO������>���g���E>lO�u����حU�����Bϒ�p�3�)���m?lFp�tgf_3n׵�#���b���Y<3fZ���RNBh��qQ$���yYxe��"N��vD��>uh2�M�K�HG�ʲ���q�ud{d�L��ʽ���q��-�����^���"��      W   �   x�E�ˑ D�̖�
�2�Ǳ����zE�i��$�!�
(�U��l�y���2?a�rM�h{I����8�4Tg>ђ�W��7bC���1}�.dyܹ	 c��]��|��=;�(?�f�Ѫ��[���т����"?!0"��B 
i���?\gO�.��"s�u��Aِ�N��\�{w]�Q�8�bӄ��A2Hޝ���o��U�Q�      P   "  x��X�n�������0����]��I��"��@�Ő���K2<�"]Yr���k���"M�&@/�u�eI�_��W���������5����������h������=������/�&3=γQ#tQK>�o7U�/�E���D�<nRY-��1�5�oY���뺨~a�u<L�-QV��1�q3�Lfzڿ���m�]���Z��>x������L̨���:�o[7�zS]�Q�[��x۾�X���H�7�@k�؞����=i/ڳ���������w�{�q��=����9�!� %i�=��Ce��>����b�^��}>������Y�E;�1<����!�0�ǆ�{��u�^٧!�8n���8��7u5"y���}�c��N{8��=�qs<�
<ù35�^�G����g:6��������P�}�}+Y�-�$�`�����?��Ay"3CY}�C�'�������c��p�\��������M)��(��ӦR�p7��N��N�ſw�����J+xd�@�0��G�`x���|��r���O�;��GFi�I�3跧��@���H�8��_����l���{���yv~�;�� é)��:�=v9��)J`���9-�!&�Fg�9�qr��L�Õ��n��^<_:�"���K��.�G�s����Gi�9�^�lo�T�$��䩦Hs�Tf�Wue2�9�m����xa8x��l��(�n�cQ���,y%�����Lk���>�5�jO������=[�6��������~g��K�K럭�2�:F�>%xѯy|�y�s�������*�	�Ip�������;݁7i㙒f�>��7$(��e�p����ZB�2k�a���Po��T؜��x�\��9�=��~����fX!\�;��<��뜐�,���H�f^�ZN3)��'���բUm��i��u�E��l�%�]�O^��3뙬�>ER�f��,ѓ5Bf;\�4*�@��n_��9�䩌J^n��1s����v�T��D�N��E@G!K�,+�֤u)cQ�ŘW"D�2�+^H�Q�X��cQh�r�'M����:�oV`�B�1��ȅ��4id��(���/��Q�Hd��!��棒O'\T����xJ1�,~NqC v�~݈|(X@zr�H�:L�i#j}«���i�p�~S���5&�RCp@�K�S>���Va�%�^)5mj�K���h	�,Q^K�7�%�'�8���M!k�3Y�mT�X��f~ۘUy]���F���x\�4�M�^x�VvF��+�Z%&в)�P�sDQ�}��X��KDƇ����!�䄏D�՗�˴2m�wL�r���3"1m�cY��{a�xK�ޗU�[�P�u+�1�x!�o�s����ϐu۲�����LE��:�����Ҟo������鎶$��2�9�h[��0�s���"��#��^TcԘ���Ϩ����wu���J��G|܋�&��<X6�;��}�Xm�j(P�	Ч��N����:��T	�e�XZ�-�J�c��Q!�
�0�q�W��᰺C��uCY�H$M,��I� #/����dԋ󉙗r$3�`�f(�a�A(����2'
��������1�]";��[؎RY�+-�T�$/#���zS��8�h�2��&���R�m���ykk��a�،�p�-w� �(����<�4�1��n�g�Q4d��x�E����
��=�Yd�O��$O����$�J���6��id�[�A;A��������b�H_��K�K���ZL�g����&��(6tg�D/i�9s5}@���Z���x�Mʻ3:�;EO��q�*��f���c���o�=Sz�v\�K�#"Kz�=$�R��M	s���;F?@�G�?!��X�q,�'����u�)[��Ȁ���}}~�U{D��~�:�a�ͷ=�e}�82l������5�P�3�:������$c��o ��������<�/Q~PDQo�P�j���o)f�Q�2�B��l���X��L�|���
�E�O�^ɥ���k����] Q���Q�S��h#r�@y�%*��9�<χh�ă:q\/3a�
f,��6��Ĉ�DnĨgI��eW�V�y,Sb@1 K��L��Z�1�&-���Bcp�]bgW��ֲz��,�_�ؐ�~�}/v������$�h	�W�iG[���k@LG�$�h Y4�p�]7Q����<KH4�K����_r;d��t��I(�=�wE W��kr�Wv!ʈ�]ų&E��c��;�2��2Mx�d*���w� �e���̈B�3���0���A{!�0Xŉ�'�k�*��Uۅ�j	��;V�@pO�É��t9R�}��CվQӼ��C��s�ԭ�QX�F�rK-:�v'1� 0xI.�i]S��G�����G]㪰�y�C˶pq��٣�������o
']gu����0|� ���Jj�j��,�����q�1հ*^���$���=T2-�/L��w���B.-�^�ץ�e��%rDRH�e�*�B�	��M�
�g�Aҷ/
�%M�{���E��A��tC�&�&a ����<t�$��q����~@^���$�+�B�u�<�jS⇞�l�ZR�	���u����\){����Ukoy��Q���]t}����{z�/re��r2��>�\C!���/����V��?�|T�c�i���5�ps�:6�`�	
�g&&coac/����?PK��i�:��rUЮ�E�26�q^��2	p�2��I$��h3��.����"����29OQ�Ƹ���W�&�X�����)��JԖL�)R.�*�k;N��݀ٞ�8n�17�ڶ�~�֜���666��O3      R   D   x�3估�¾�/l����^.#�����/�_�
0�0����/l�
� .6]��b���� '�)�      Z   E   x�˱�@��[��=����4�zX��-W~tޚ!�Zb�I�	��QL���V7���*7�|y�k      L   �   x�36�0�{/� �ݜ&\�xa����/컰�31)�4'�,%	��KI̫t�L�KI��+*�T1JR10U�+		wsN,�L�H�4I�p2II�3�O�J��HI5/�Ɉ�	5�яL�K��2�H�Hq�4202�54�52S04�2��22�3���60�'����������� Si?t     