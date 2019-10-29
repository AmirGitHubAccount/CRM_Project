class ClientsPage {
    constructor(selenium) {
        this.selenium = selenium
        this.startTest = false
        this.personDetail = {}
        this.arrayOfPersons = []

        this.object = {
            navigateButtonHomeSelected: {
                locatorType: "css",
                locatorValue: "input.selected home-btn[value=Home]"
            },
            navigateButtonAnalytics: {
                locatorType: "css",
                locatorValue: "input.nav-btn[value=Analytics]"
            },
            navigateButtonHome: {
                locatorType: "css",
                locatorValue: "input.nav-btn[value=Home]"
            },
            navigateButtonActions: {
                locatorType: "css",
                locatorValue: "input.nav-btn[value=Actions]"
            },
            navigateButtonClients: {
                locatorType: "css",
                locatorValue: "input.nav-btn[value=Clients]"
            },
            winAddClientFirstNameEditText: {
                locatorType: "id",
                locatorValue: "firstName"
            },
            winAddClientLastNameEditText: {
                locatorType: "id",
                locatorValue: "lastName"
            },
            winAddClientCountryEditText: {
                locatorType: "id",
                locatorValue: "country"
            },
            winAddClientEmailEditText: {
                locatorType: "id",
                locatorValue: "email"
            },
            winAddClientOwnerEditText: {
                locatorType: "xpath",
                locatorValue: "//*[@id='owner']//self::input"
            },
            winAddClientButtonDelete: {
                locatorType: "xpath",
                locatorValue: "//*[@value='Delete Client']//self::input"
            },
            winAddClientAddButton: {
                locatorType: "className",
                locatorValue: "add-client-btn"                
            },
            clientsTable: {
                locatorType: "xpath",
                locatorValue: tableRowNumber => `//*[@id='root']/div/div[4]/table${tableRowNumber}`
            },
            searchClientsDropDownList: {
                locatorType: "xpath",
                locatorValue: dropDownListSelection => `//*[@value='${dropDownListSelection}']//self::option`
            },
            searchClientsEditText: {
                locatorType: "xpath",
                locatorValue: "//*[@type='text']//self::input"
            },
            arrayAnalyticsBadges: {
                locatorType: "className",
                locatorValue: "badge-val"
            },
            popupUpdateSuccessful: {
                locatorType: "className",
                locatorValue: "success-pop-up"
            },
            clientPersonalDetails: {
                firstName: "",
                lastName: "Barzilay"
            },
            tablenClientIdentify: {
                locatorType: "className",
                locatorValue: "clientDetails"
            },
            pageNumberIdentify: {
                locatorType: "className",
                locatorValue: "page"
            }
        }
    }


    async setWinAddClientFirstNameEditText(strFirstNameAsAParameter){
        await this.selenium.infra_setText(`${this.object.clientPersonalDetails.firstName + strFirstNameAsAParameter}`, this.object.winAddClientFirstNameEditText.locatorType, this.object.winAddClientFirstNameEditText.locatorValue)
    }

    async setWinAddClientLastNameEditText(){
        await this.selenium.infra_setText(this.object.clientPersonalDetails.lastName , this.object.winAddClientFirstNameEditText.locatorType, this.object.winAddClientLastNameEditText.locatorValue)
    }

    async setWinAddClientCountryEditText(){
        await this.selenium.infra_setText("Malta", this.object.winAddClientCountryEditText.locatorType, this.object.winAddClientCountryEditText.locatorValue)
    }

    async setWinAddClientOwnerEditText(){
        await this.selenium.infra_setText("BennyGantz", this.object.winAddClientOwnerEditText.locatorType, this.object.winAddClientOwnerEditText.locatorValue)
    }

    async setWinAddClientEmailEditText(){
        await this.selenium.infra_setText("aaa@hotmail.com", this.object.winAddClientEmailEditText.locatorType, this.object.winAddClientEmailEditText.locatorValue)
    }

    async setSearchClientsEditText(strClientName){
        await this.selenium.infra_setText(strClientName, this.object.searchClientsEditText.locatorType, this.object.searchClientsEditText.locatorValue)
    }

    async setSearchClientsDropDownList(){
        await this.selenium.infra_setText("Country", this.object.searchClientsDropDownList.locatorType, this.object.searchClientsDropDownList.locatorValue)
    }
    async clickNavigateButtonAnalytics(){
        if(await this.selenium.infra_isElementExists(this.object.navigateButtonAnalytics.locatorType,   this.object.navigateButtonAnalytics.locatorValue))
            await this.selenium.infra_clickElement(this.object.navigateButtonAnalytics.locatorType,     this.object.navigateButtonAnalytics.locatorValue)
    }    

    async clickNavigateButtonHome(){
        if(await this.selenium.infra_isElementExists(this.object.navigateButtonHome.locatorType,    this.object.navigateButtonHome.locatorValue))
            await this.selenium.infra_clickElement(this.object.navigateButtonHome.locatorType,      this.object.navigateButtonHome.locatorValue)
    }
    async clickNavigateButtonActions(){
        if(await this.selenium.infra_isElementExists(this.object.navigateButtonActions.locatorType, this.object.navigateButtonActions.locatorValue))
            await this.selenium.infra_clickElement(this.object.navigateButtonActions.locatorType,   this.object.navigateButtonActions.locatorValue)
    }

    async clickNavigateButtonClients(){
        if(await this.selenium.infra_isElementExists(this.object.navigateButtonClients.locatorType, this.object.navigateButtonClients.locatorValue))
            await this.selenium.infra_clickElement(this.object.navigateButtonClients.locatorType,   this.object.navigateButtonClients.locatorValue)
    }

    async clickWinAddClientAddButton(){
        await this.selenium.infra_clickElement(this.object.winAddClientAddButton.locatorType, this.object.winAddClientAddButton.locatorValue)
    }

    async clickSearchClientsDropDownList(){
        let dropDownListSelection = "Name"
        await this.selenium.infra_clickElement(this.object.searchClientsDropDownList.locatorType, this.object.searchClientsDropDownList.locatorValue(dropDownListSelection))
    }

    async getOutstandingClientsNumber(){
        let arrayPageNumber = await this.selenium.infra_findElementListBy(this.object.arrayAnalyticsBadges.locatorType, this.object.arrayAnalyticsBadges.locatorValue)
        let strOutstandingClientsNumber = await this.selenium.infra_getTextFromElement(null, null, arrayPageNumber[2] )        
        return strOutstandingClientsNumber
    }

    async getClientPageNumber(){
        let arrayPageNumber = await this.selenium.infra_findElementListBy(this.object.pageNumberIdentify.locatorType, this.object.pageNumberIdentify.locatorValue)
        let strPageNumber = ""
        for(let i=0; i<=arrayPageNumber.length-1; i++){
            strPageNumber  = await this.selenium.infra_getTextFromElement(null, null, arrayPageNumber[i])
            console.log(`Page Number  ${i+1} is: ${strPageNumber}`)
        }
        return strPageNumber
    }

    async getClientListFromTable(){
        let arrayClientList = await this.selenium.infra_findElementListBy(this.object.tablenClientIdentify.locatorType, this.object.tablenClientIdentify.locatorValue)
        return arrayClientList
    }

    async deleteAllClientWithSameName(strClientName){
        await this.clickNavigateButtonHome();
        await this.clickNavigateButtonClients();
        await this.clickSearchClientsDropDownList();
        await this.setSearchClientsEditText(strClientName);

        let iPageNumber = 0
        iPageNumber = await this.getClientPageNumber();
        let arrayClientList = await this.getClientListFromTable()
        let tableRowNumber  = ""
        console.log(`Found ${arrayClientList.length} Clients By the same Name`);
        
        for(let i=arrayClientList.length-1; i>=0; i--){
            tableRowNumber = `/tr[${i+2}]/th[1]`
            await this.selenium.infra_clickElement(this.object.clientsTable.locatorType,                this.object.clientsTable.locatorValue(tableRowNumber))
            await this.selenium.infra_clickElement(this.object.winAddClientButtonDelete.locatorType,    this.object.winAddClientButtonDelete.locatorValue)
            await this.selenium.infra_sleep()
            // strClientName = await this.selenium.infra_getTextFromElement(this.object.clientsTable.locatorType, this.object.clientsTable.locatorValue(tableRowNumber))
            // console.log(`Client Name number  ${i+1} is: ${strClientName}`)
            // arrayClientNames.push(strClientName)            
        }

        iPageNumber = await this.getClientPageNumber();
        await this.selenium.infra_clearElementField(this.object.searchClientsEditText.locatorType, this.object.searchClientsEditText.locatorValue)                
        if(iPageNumber > 0)
            await this.deleteAllClientWithSameName();
    }

    async clearWinAddClient(){
        await this.selenium.infra_clearElementField(this.object.winAddClientFirstNameEditText.locatorType,  this.object.winAddClientFirstNameEditText.locatorValue)
        await this.selenium.infra_clearElementField(this.object.winAddClientLastNameEditText.locatorType,   this.object.winAddClientLastNameEditText.locatorValue)
        await this.selenium.infra_clearElementField(this.object.winAddClientCountryEditText.locatorType,    this.object.winAddClientCountryEditText.locatorValue)
        await this.selenium.infra_clearElementField(this.object.winAddClientOwnerEditText.locatorType,      this.object.winAddClientOwnerEditText.locatorValue)
        await this.selenium.infra_clearElementField(this.object.winAddClientEmailEditText.locatorType,      this.object.winAddClientEmailEditText.locatorValue)
    }

    async getAllClientsWithTheSameName(){
        let arrayClientList = await this.getClientListFromTable()
        let arrayClientNames = []
        let strClientName   = ""
        let tableRowNumber  = ""
        console.log(`Found ${arrayClientList.length} Client with the same Name`);
        
        for(let i=0; i<=arrayClientList.length-1; i++){
            tableRowNumber = `/tr[${i+2}]/th[1]`
            strClientName = await this.selenium.infra_getTextFromElement(this.object.clientsTable.locatorType, this.object.clientsTable.locatorValue(tableRowNumber))
            console.log(`Client Name number  ${i+1} is: ${strClientName}`)
            arrayClientNames.push(strClientName)            
        }
        return arrayClientNames
    }
    
    
    async sleep() {
        await this.selenium.infra_sleep()
    }    
    
    async lunchCEMWebsite(){
        await this.selenium.infra_setBrowserUrl("https://lh-crm.herokuapp.com/")
    }

    async closeBrowser(){
        await this.selenium.infra_closeBrowser()
    }

    async navigateToClientsPage() {
        await this.selenium.infra_setBrowserUrl("https://lh-crm.herokuapp.com/client")
    }

    async verifyPopupUpdateSuccessfulIsExist() {
        if(await this.selenium.infra_isElementExists(this.object.popupUpdateSuccessful.locatorType, this.object.popupUpdateSuccessful.locatorValue)){
            console.log(`ClientsPage Verify Popup Update Successful:   locatorType=${this.object.popupUpdateSuccessful.locatorType}  locatorValue=${this.object.popupUpdateSuccessful.locatorValue}     PASS`)
            return true
        }
        else{
            console.error(`ClientsPage Verify Popup Update Successful:   locatorType=${this.object.popupUpdateSuccessful.locatorType}  locatorValue=${this.object.popupUpdateSuccessful.locatorValue}     FAIL`)            
            return false
        }
    }
}
module.exports = ClientsPage

