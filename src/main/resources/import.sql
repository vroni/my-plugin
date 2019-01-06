INSERT INTO public.search_request(id, appartment_rent, appartment_size, email, first_name, last_name)
    VALUES (1, 2000, 120, 'imnotbatman@wayne.com', 'Bruce', 'Wayne'),
     (2, 1500, 340, 'whysoserious@joker.com', 'The', 'Joker');

INSERT INTO public.city(
            id, name)
    VALUES (1, 'München'),
            (2, 'Berlin'),
            (3, 'Gotham'),
            (4, 'New York'),
            (5, 'Tokyo');

INSERT INTO public.district(
            district_id, name, city_id)
    VALUES (1,'Laim', (select id from city where name = 'München')),
     (2, 'Giesing', (select id from city where name = 'München')),
     (3, 'Haidhausen', (select id from city where name = 'München')),
     (4, 'Au', (select id from city where name = 'München')),
     (5, 'Manhattan', (select id from city where name = 'New York')),
     (6, 'Brooklyn', (select id from city where name = 'New York')),
     (7, 'Queens', (select id from city where name = 'New York')),
     (8, 'Downtown', (select id from city where name = 'Gotham')),
     (9, 'Shibuya', (select id from city where name = 'Tokyo')),
     (10, 'Shinjuku', (select id from city where name = 'Tokyo'));
