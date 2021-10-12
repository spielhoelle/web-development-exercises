# Install MongoDB

## Add the official repository

Add the repository key:
<pre>
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
</pre>

The result should look similar to this:
<pre>
Executing: /tmp/tmp.0UpmDNT4uT/gpg.1.sh --keyserver
hkp://keyserver.ubuntu.com:80
--recv
0C49F3730359A14518585931BC711F9BA15703C6
gpg: requesting key A15703C6 from hkp server keyserver.ubuntu.com
gpg: key A15703C6: public key "MongoDB 3.4 Release Signing Key &lt;packaging@mongodb.com&gt;" imported
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
</pre>

Add the repository to apt, but be sure to __update the bold MongoDB version__ before you run this command. You can get the up-to-date command on the [MongoDB documentation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition).

<pre>
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/<b>3.6</b> multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-<b>3.6</b>.list
</pre>

## Install MongoDB

Update the package lists:
<pre>
sudo apt-get update
</pre>

Install the ```mongodb-org``` meta package, which includes the daemon, configuration and init scripts, shell and management tools on the server.

<pre>
sudo apt-get install mongodb-org -y
</pre>

Create the data director:
<pre>
sudo mkdir -p /data/db
sudo chown mongodb:mongodb /data/db
</pre>

Start the MongoDB daemon and check the status:
<pre>
sudo systemctl start mongod
sudo systemctl status mongod
</pre>

The output of the status check should look similar to this:
<pre>
mongod.service - High-performance, schema-free document-oriented database
   Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled)
   Active: active (running) since Sat 2018-02-10 18:36:32 CET; 1min 3s ago
     Docs: https://docs.mongodb.org/manual
 Main PID: 22069 (mongod)
    Tasks: 17
   Memory: 56.9M
      CPU: 400ms
   CGroup: /system.slice/mongod.service
           └─22069 /usr/bin/mongod --config /etc/mongod.conf
</pre>

Add MongoDB daemon to system startup:
<pre>
sudo systemctl enable mongod
</pre>

## Add an administrative user

To add a user, we'll connect to the Mongo shell:
<pre>
sudo mongo
</pre>

The output of the shell will warn us, that access control is not enabled for the database and that read/write access to data and configuration is unrestricted.

<pre>
2018-02-10T18:36:32.831+0100 I CONTROL  [initandlisten]
2018-02-10T18:36:32.831+0100 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-02-10T18:36:32.831+0100 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-02-10T18:36:32.831+0100 I CONTROL  [initandlisten]
2018-02-10T18:36:32.831+0100 I CONTROL  [initandlisten]
2018-02-10T18:36:32.831+0100 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.
2018-02-10T18:36:32.831+0100 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2018-02-10T18:36:32.831+0100 I CONTROL  [initandlisten]
2018-02-10T18:36:32.831+0100 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
2018-02-10T18:36:32.831+0100 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2018-02-10T18:36:32.831+0100 I CONTROL  [initandlisten]
</pre>

We will add an administrative user with the name "databaseManager" and a secure password, that you should choose yourself.

<pre>
use admin
db.createUser(
  {
    user: "databaseManager",
    pwd: "<b>{your secure password}</b>",
    roles: [ { role: "root", db: "admin" } ]
  }
);
</pre>

Type ```exit``` and press [Enter] to leave the client.

## Enabling Authentication

Open the mongodb.conf file with <a href="https://github.com/noreading/simple-node-server#basic-nano-commands" target="_blank">nano</a>:  
<pre>
sudo nano /etc/mongod.conf
</pre>

In the "#security" section we remove the hash to enable it and add the authorization setting:
<pre>
security:
  authorization: enabled
</pre>

Restart the daemon to activate authorization:
<pre>
sudo systemctl restart mongod
</pre>

## Verify authorization

Open the Mongo shell:
<pre>
sudo mongo
</pre>

Select the admin database:
<pre>
use admin
</pre>

Try to authenticate as the admin user:
<pre>
db.auth('databaseManager', '<b>{your secure password}</b>')
</pre>

If the result is not only "1", something went wrong copy &amp; pasting.
This is what the full verification should look like:
<pre>
> use admin
switched to db admin
> db.auth('databaseManager', '<b>{your secure password}</b>')
1
> exit
bye
</pre>

You can get more information about user authorization in the [Official Documentation](https://docs.mongodb.com/manual/tutorial/enable-authentication/#user-administrator) if you'd like to know more.

---
__Next:__ [Install nginx](./install-nginx.md)
