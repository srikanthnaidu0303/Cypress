/// <reference types="cypress" />
 
describe('This is my framework part1 suite', function(){
 
    before(function(){
     
        //Runs once before all tests in this suite
        cy.fixture('Framework1').then(function(data){
 
        this.data = data
 
        })
 
    })
 
    beforeEach(() =>{
 
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
    
        })
 
 
it('My first test case using the framework', function(){
 
 
/*cy.get('input[name="name"]:nth-child(2)').type("Bob")
cy.get('#exampleFormControlSelect1').select("Male")*/
 
// Passing the data for name and gender from the fixture file 'Framework1.json instead of hard coding
cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
cy.get('#exampleFormControlSelect1').select(this.data.gender)
cy.get(':nth-child(4) > .ng-pristine').should('have.value', this.data.name)
cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
cy.get('input[value="option3"]').should('be.disabled')
 
})
 
it('This is my second test case for testing the shopping cart', function(){
 
 
    
    cy.get('a[href="/angularpractice/shop"]').click()
 
    cy.get('.container > .navbar-brand').should('have.text','ProtoCommerce Home')
 
    //Capturing the product tiles and passing them to an array to iterate and add products based on title 
 
   /* cy.get('h4.card-title').each(($el,index,$list) => {
 
    if($el.text().includes('Blackberry')){
 
        cy.get('button.btn.btn-info').eq(index).click()
    }
 
    })*/
 
    // Creating a custom cypress command 'selectProduct' to include the above code in to a function instead writing as above
    // also passig the array of product name and selecting the product by iterarting through that array using the custom command created 
    
    this.data.productName.forEach(function(element){
       
        cy.selectProduct(element)
 
    })
    
    
    
    })
 
 
 
})
