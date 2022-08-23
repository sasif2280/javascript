import sqlite3

con = sqlite3.connect('patient.db')
cur = con.cursor()
cur.execute(
    'CREATE TABLE IF NOT EXISTS people (name TEXT, mail TEXT , date TEXT, time TEXT, count TEXT)')

con.commit()
con.close()
