# Node.js SAP-Client Prototype

This project will show a prototype that connects to the SAP-BAPI / RFCs via Node.js

## Data Sources

Node.js

- Example how to call a BAPI from Node.js ([link](https://github.com/SAP/node-rfc))
- Example how to call the User List BAPI from Node.js ([link](http://blog.maruskin.eu/2018/04/how-to-call-bapi-in-sap-from-nodejs-app.html))

BAPI

- Documentation for Get user list ([link](https://www.se80.co.uk/sapfms/b/bapi/bapi_customer_getlist.htm))
- Documentation for ABAP Object Types ([link](https://www.sapdatasheet.org/abap/tabl/bapiussrge.html))

## Install

- Make sure you installed the [SAP NetWeaver RFC SDK](https://sap.github.io/node-rfc/install.html#sap-nw-rfc-sdk-installation)
- Install node dependencies `npm install`

## Run

To run the project locally run

`node .`


## Known issues

If you recieve the following error, when running this on macOS

```
ERROR       hostname 'YOURCOMPUTERSDNSNAME.local' unknown
DETAIL      NiHLGetNodeAddr: hostname cached as unknown
```

make sure to add an entry with your network IP to your local hosts file

```
INTERNALIP YOURCOMPUTERSDNSNAME
```
