const BasePage      = require("../Infra/BasePage");
const ClientsPage   = require("../Pages/ClientsPage")

class ClientsPageTest {
    constructor() {
        this.testSelenium   = new BasePage().selenium
        this.clientsPage    = new ClientsPage(this.testSelenium)
    }

    async clientTest(){
        await this.clientsPage.navigateToClientsPage();
    }

    async getPageNumber(){
        await this.clientsPage.lunchCEMWebsite();
        await this.clientsPage.clickNavigateButtonClients();
        await this.clientsPage.getClientPageNumber();
    }

    async addNewClient(strClientName){
        await this.clientsPage.clickNavigateButtonActions();
        await this.clientsPage.setWinAddClientFirstNameEditText(`${strClientName}`);
        await this.clientsPage.setWinAddClientLastNameEditText();
        await this.clientsPage.setWinAddClientCountryEditText();
        await this.clientsPage.setWinAddClientOwnerEditText();
        await this.clientsPage.setWinAddClientEmailEditText();
        await this.clientsPage.clickWinAddClientAddButton();
        await this.clientsPage.verifyPopupUpdateSuccessfulIsExist();
        await this.clientsPage.clearWinAddClient();
        await this.clientsPage.clickNavigateButtonHome();
    }

    async findClientByName(strClientNameToLookFor){
        await this.clientsPage.clickNavigateButtonClients();
        await this.clientsPage.clickSearchClientsDropDownList();
        await this.clientsPage.setSearchClientsEditText(strClientNameToLookFor);
        let arrayClientName =  await this.clientsPage.getAllClientsWithTheSameName();
        return arrayClientName;
    }

    async deleteAllClientWithSameName(strClientName){
        await this.clientsPage.deleteAllClientWithSameName(strClientName);
    }

    async addRemoveClient_StabilityTest(){
        let strClientName = "Amir"
        //await this.clientsPage.lunchCEMWebsite();
        for(let i=1; i<=2; i++)
            await clientPageTest.addNewClient(`${strClientName} ${i}`);

        await clientPageTest.deleteAllClientWithSameName(`${strClientName}`);
        let arrayClientName = await clientPageTest.findClientByName(strClientName);
        if(arrayClientName.length!=0){
            await clientPageTest.printTestReportBorderUp("red");
            await clientPageTest.printTestReport("red", "Test: FAIL!");
            await clientPageTest.printTestReport("red", "Test Name:         delete All Client With Same Name Functionality Test");
            await clientPageTest.printTestReport("red", "First we added 3,000 new clients and then we delete them all");
            await clientPageTest.printTestReport("red", `Expected result:   To find that there is NO client with neme ${strClientName}`);
            await clientPageTest.printTestReport("red", `Actual result:     We have ${arrayClientName.length} client with neme ${arrayClientName[0]}`);
            await clientPageTest.printTestReportBorderDown("red");
        }
        else{
            await clientPageTest.printTestReportBorderUp("green");
            await clientPageTest.printTestReport("green", "Test: PASS!                                                ");
            await clientPageTest.printTestReport("green", "Test Name:         delete All Client With Same Name Functionality Test");
            await clientPageTest.printTestReport("green", "First we added 3,000 new clients and then we delete them all");
            await clientPageTest.printTestReport("green", `Expected result:   To find that there is NO client with neme ${strClientName}`);
            await clientPageTest.printTestReport("green", `Actual result:     We have ${arrayClientName.length} client with neme ${strClientName}`);
            await clientPageTest.printTestReportBorderDown("green");
        }
        // await this.clientsPage.closeBrowser();
    }

    async addNewClient_FunctionalityTest(){
        let strClientName = "Amir"
        await this.clientsPage.lunchCEMWebsite();
        await clientPageTest.deleteAllClientWithSameName(strClientName);
        await clientPageTest.addNewClient(strClientName);
        let arrayClientName = await clientPageTest.findClientByName(strClientName);
        if(arrayClientName.length!=1){
            await clientPageTest.printTestReportBorderUp("red");
            await clientPageTest.printTestReport("red", "Test: FAIL!");
            await clientPageTest.printTestReport("red", "Test Name:         add New Client Functionality Test");
            await clientPageTest.printTestReport("red", `Expected result:   To have One New client with neme ${strClientName}`);
            await clientPageTest.printTestReport("red", `Actual result:     We have ${arrayClientName.length} client with neme ${arrayClientName[0]}`);
            await clientPageTest.printTestReportBorderDown("red");
        }
        else
        {
            await clientPageTest.printTestReportBorderUp("green");
            await clientPageTest.printTestReport("green", "Test: PASS!                                                ");
            await clientPageTest.printTestReport("green", "Test Name:         add New Client Functionality Test");
            await clientPageTest.printTestReport("green", `Expected result:   To have One New client with neme ${strClientName}`);
            await clientPageTest.printTestReport("green", `Actual result:     We have ${arrayClientName.length} client with neme ${arrayClientName[0]}`);
            await clientPageTest.printTestReportBorderDown("green");
        }
        //await this.clientsPage.closeBrowser();
        await this.clientsPage.sleep();        
    }

    async deleteAllClientWithSameName_FunctionalityTest(){
        let strClientName = "Amir"
        await this.clientsPage.lunchCEMWebsite();
        // await clientPageTest.addNewClient(strClientName);
        // await clientPageTest.addNewClient(strClientName);
        await clientPageTest.deleteAllClientWithSameName(strClientName);

        let arrayClientName = await clientPageTest.findClientByName(strClientName);
        if(arrayClientName.length!=0){
            await clientPageTest.printTestReportBorderUp("red");
            await clientPageTest.printTestReport("red", "Test: FAIL!");
            await clientPageTest.printTestReport("red", "Test Name:         delete All Client With Same Name Functionality Test");
            await clientPageTest.printTestReport("red", `Expected result:   To find that there is NO client with neme ${strClientName}`);
            await clientPageTest.printTestReport("red", `Actual result:     We have ${arrayClientName.length} client with neme ${arrayClientName[0]}`);
            await clientPageTest.printTestReportBorderDown("red");
        }
        else{
            await clientPageTest.printTestReportBorderUp("green");
            await clientPageTest.printTestReport("green", "Test: PASS!                                                ");
            await clientPageTest.printTestReport("green", "Test Name:         delete All Client With Same Name Functionality Test");
            await clientPageTest.printTestReport("green", `Expected result:   To find that there is NO client with neme ${strClientName}`);
            await clientPageTest.printTestReport("green", `Actual result:     We have ${arrayClientName.length} client with neme ${strClientName}`);
            await clientPageTest.printTestReportBorderDown("green");
        }
        //await this.clientsPage.closeBrowser();
    }

    
    async sampleForTestFailReport() {
        await clientPageTest.printTestReportBorderUp("red");
        await clientPageTest.printTestReport("red", "Test: FAIL!                                           ");
        await clientPageTest.printTestReport("red", "Test Name:         sample For Test Fail Report       ");
        await clientPageTest.printTestReport("red", `Expected result:   This is just a sample for test Fail Report`);
        await clientPageTest.printTestReport("red", `Actual result:     This is just a sample for test Fail Report`);
        await clientPageTest.printTestReportBorderDown("red");
        await this.clientsPage.closeBrowser();        
    }


    async printTestReport(color, strtestResult) {
        console.log("%c" +     "###################      " + strtestResult + "                  ###################", "color:" + color + ";font-weight:bold;");
    }
    async printTestReportBorderUp(color) {
        for(let i=0; i<= 1; i++)
            console.log("%c" + "###########################################################################################################################", "color:" + color + ";font-weight:bold;");
        for(let y=0; y<= 1; y++)
        console.log("%c" + "###################                                                                                     ###################", "color:" + color + ";font-weight:bold;");
    }

    async printTestReportBorderDown(color) {
        for(let y=0; y<= 1; y++)
            console.log("%c" + "###################                                                                                     ###################", "color:" + color + ";font-weight:bold;");
        for(let i=0; i<= 1; i++)
            console.log("%c" + "########################################################################################################", "color:" + color + ";font-weight:bold;");
    }

    async printTestReportBorderDown(color) {
        for(let y=0; y<= 1; y++)
            console.log("%c" + "###################                                                                                     ###################", "color:" + color + ";font-weight:bold;");
        for(let i=0; i<= 1; i++)
            console.log("%c" + "###########################################################################################################################", "color:" + color + ";font-weight:bold;");
    }


    async analyticsOutstandingClientsNumber_FunctionalityTest() {
        let strClientName = "Amir"
        await this.clientsPage.lunchCEMWebsite();
        await this.clientsPage.clickNavigateButtonAnalytics();
        await this.clientsPage.sleep();
        await this.clientsPage.sleep();
        
        let intOutstandingClientsNumberBefor = await this.clientsPage.getOutstandingClientsNumber();
        await clientPageTest.addNewClient(strClientName);

        await this.clientsPage.clickNavigateButtonAnalytics();
        await this.clientsPage.sleep();
        await this.clientsPage.sleep();
        let intOutstandingClientsNumberAfter = await this.clientsPage.getOutstandingClientsNumber();

        if(parseInt(intOutstandingClientsNumberBefor) + 1 == intOutstandingClientsNumberAfter){
            await clientPageTest.printTestReportBorderUp("green");
            await clientPageTest.printTestReport("green", "Test: PASS!                                                ");
            await clientPageTest.printTestReport("green", "Test Name:         analytics Outstanding Clients Number Functionality Test");
            await clientPageTest.printTestReport("green", `Expected result:   To have ${intOutstandingClientsNumberBefor} + ${1} Outstanding Clients Number` );
            await clientPageTest.printTestReport("green", `Actual result:     We have ${intOutstandingClientsNumberAfter} Outstanding Clients Number` );
            await clientPageTest.printTestReportBorderDown("green");
        }
        else
        {
            await clientPageTest.printTestReportBorderUp("red");
            await clientPageTest.printTestReport("red", "Test: FAIL!");
            await clientPageTest.printTestReport("red", "Test Name:         analytics Outstanding Clients Number Functionality Test");
            await clientPageTest.printTestReport("red", `Expected result:   To have ${intOutstandingClientsNumberBefor} + ${1} Outstanding Clients Number` );
            await clientPageTest.printTestReport("red", `Actual result:     We have ${intOutstandingClientsNumberAfter} Outstanding Clients Number` );
            await clientPageTest.printTestReportBorderDown("red");
        }
        //await this.clientsPage.closeBrowser();        
    }
}   




let clientPageTest = new ClientsPageTest();

async function runAllProjectTests()
{
    await clientPageTest.analyticsOutstandingClientsNumber_FunctionalityTest();    
    await clientPageTest.addNewClient_FunctionalityTest();
    await clientPageTest.deleteAllClientWithSameName_FunctionalityTest();
    await clientPageTest.addRemoveClient_StabilityTest();
    await clientPageTest.sampleForTestFailReport();    
}

runAllProjectTests()

