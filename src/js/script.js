/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  'use strict';

  const select = {
    templateOf: {
      menuProduct: '#template-menu-product',
    },
    containerOf: {
      menu: '#product-list',
      cart: '#cart',
    },
    all: {
      menuProducts: '#product-list > .product',
      menuProductsActive: '#product-list > .product.active',
      formInputs: 'input, select',
    },
    menuProduct: {
      clickable: '.product__header',
      form: '.product__order',
      priceElem: '.product__total-price .price',
      imageWrapper: '.product__images',
      amountWidget: '.widget-amount',
      cartButton: '[href="#add-to-cart"]',
    },
    widgets: {
      amount: {
        input: 'input[name="amount"]',
        linkDecrease: 'a[href="#less"]',
        linkIncrease: 'a[href="#more"]',
      },
    },
  };

  const classNames = {
    menuProduct: {
      wrapperActive: 'active',
      imageVisible: 'active',
    },
  };

  const settings = {
    amountWidget: {
      defaultValue: 1,
      defaultMin: 1,
      defaultMax: 9,
    }
  };

  const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  };

  class product{
    constructor(id, data){
      const thisProduct = this;

      thisProduct.id = id;
      thisProduct.data = data;

      thisProduct.initAccodion();
      thisProduct.renderIdMenu();

      console.log('new Product:', thisProduct);
    }
    renderIdMenu(){
      const thisProduct = this;

      // generate HTML based on template
      const generatedHTML = templates.menuProduct(thisProduct.data);

      // create HTML using utils.createElementFromHTML
      thisProduct.element = utils.createDOMFromHTML(generatedHTML);

      // find menu container
      const menuContainer = document.querySelector(select.containerOf.menu);

      // add element to menu
      menuContainer.appendChild(thisProduct.element);

    }

    initAccodion(){
      const thisProduct = this;
      /* find the clickable trigger (the element that should react to clicking) */

    /* START: click event listener to trigger */

      /* prevent default action for event */

      /* toggle active class on element of thisProduct */

      /* find all active products */

      /* START LOOP: for each active product */

        /* START: if the active product isn't the element of thisProduct */

          /* remove class active for the active product */

        /* END: if the active product isn't the element of thisProduct */

      /* END LOOP: for each active product */

    /* END: click event listener to trigger */
    }
  }

  const app = {
    initMenu: function(){
      const thisApp = this;
      console.log('thisApp.data', thisApp.data);
      // const testProduct = new product();
      // console.log('testProduct', testProduct);
      for(let productData in thisApp.data.products){
        new product(productData, thisApp.data.products[productData]);
      }
    },

    initData: function(){
      const thisApp = this;

      thisApp.data = dataSource;
    },

    init: function(){
      const thisApp = this;
      console.log('*** App starting ***');
      console.log('thisApp:', thisApp);
      console.log('classNames:', classNames);
      console.log('settings:', settings);
      console.log('templates:', templates);

      thisApp.initData();
      thisApp.initMenu();

    },
  };
  app.init();
};
