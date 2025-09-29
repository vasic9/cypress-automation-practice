/// <reference types = "cypress" />

describe('JSON Objects', () => {
    it('Examples', () => {
        const exampleObj ={"key": "Arthur", "key2": "Morgan"}
        const exampleArr = ["Zevs", "Athena", "Nyx"]
        const exampleArrOfObj = [
            {"key": "Kaizen"},
            {"key": "Ikigai"},
            {"key": "Kanroku"}
        ]
        const users = {
            "firstName": "John",
            "lastName": "Jhones",
            "age": 30,
            "Students": [
                {
                    "firstName": "Yuji",
                    "lastName": "Itadori",
                },
                {
                    "firstName": "Nobara",
                    "lastName": "Kugisaki",
                }
            ]
        }
        cy.log(exampleObj["key"]);
        cy.log(exampleObj["key2"]);
        cy.log(exampleObj.key2);

        cy.log(exampleArr[0]);
        cy.log(exampleArr[1]);

        cy.log(users.Students[1].lastName);

        cy.log(exampleArrOfObj[0].key);
        cy.log(exampleArrOfObj[1].key);
        cy.log(exampleArrOfObj[2].key);
    })
})