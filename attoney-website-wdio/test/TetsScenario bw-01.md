### Exploratory testing (id: bw-01)

#### Description: Black-Boxing of one of our products

##### Prerequisites: 
- Chrome Browser (version: 102.0.5005.115 or higher);
- Windows 10 home (version: 21H2
package: 19044.1706);

### Test steps:
1. Open **[Attorneys website](https://onlineattorney.org/ "Test Me!")**
2. Fill the fields in **Get in Touch with Us** menu with test data (see below)
3. Select Real Estate Lawyer from selector
4. Click on **Submit Request** button below
4. Scroll down to the footer
5. Pass email into **newsettler field** e-mail input
6. Click **send** button
7. Click **home** button with arrow on right side of the screen

#### Test data:
- Name: "George";
- Phone: +1234567654;
- Zip-code: 279823;
- Location: NY;
- Message: Test123;
- E-mail: <fake@mail.com>

#### Expected result
Test passes successfuly, on given e-mail site had sended a letter.