/*
 * File: app/controller/Main.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Sencha.controller.Main', {
    extend: 'Ext.app.Controller',

    models: [
        'Book'
    ],
    stores: [
        'Books'
    ],
    views: [
        'BooksGrid'
    ],

    init: function(application) {
        var body = Ext.getBody();
        var helper = new Ext.dom.Helper();

        var html = "<h1>XML Grid Example</h1>";
        helper.append(body,html);

        html = "<p>This example shows how to load a grid with XML data.</p>";
        helper.append(body,html);

        html = " <p>Note that the js is not minified so it is readable. See <a href='app.js'>app.js</a>.</p>";
        helper.append(body,html);

        html = "<p>The data in the grid is loaded from <a href='sheldon.xml'>sheldon.xml</a>, which is directly from an Amazon.com search.</p>";
        helper.append(body,html);

        html = "<div id='example-grid'></div>";
        helper.append(body,html);

        Ext.create('Sencha.view.BooksGrid',{
            renderTo: 'example-grid'
        });
    }

});