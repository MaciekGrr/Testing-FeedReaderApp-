/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('have defined, not empty url', function() {  
        for (const feed of allFeeds) {        
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0); // added length attribiute :)
            };
        });

        it('have defined, not empty name property', function() {
            for (const feed of allFeeds) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
            }
        });

    });






    describe('The menu', function() {


        it('have menu elements is defined and hidden by default', function(){           
            expect($('body').hasClass('menu-hidden')).toBe(true);   // from html/css we checked that element is hidden when it hasClass menu-hidden
        });

     
        it('ensure visibility changes when menu clicked', function(){    
            var menuIcon = $('.menu-icon-link');
            var bodyHidden = $('body').hasClass('menu-hidden');

            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });                 
    });



    describe('Initial Entries', function(){

        beforeEach(function(done) {  // asynchronus test
            loadFeed(0, function() {  // we need to check what is the result of running LoadFeed
            done();
            });
        });

        it('when the loadFeed function is called and completed, there is at least single .entry inside .feed container', function(){
            expect($('.feed .entry').length).not.toBe(0); // we have to check if .entry, the .child of .feed has a value
            console.log($('.feed .entry'));
        });

    });




    describe('New Feed Selection', function(){
        beforeEach(function(done) {
            loadFeed(0, function() {    // we load and save feed 0 BEFORE the test
            var entry0 = $('.feed .entry');  
            console.log($('.feed .entry'));
            return entry0;                    
            loadFeed(1, function() {    // we load and save feed 1
            var entry1 = $('.feed .entry'); 
            console.log($('.feed .entry'));
            return entry1;                        
            
            done();
            });
            });
        });
        

        it('content of next feed loaded is different that previous', function(){
            expect(entry0).not.toBe(entry1);  // we need to check if the content 1 is different than content 2 to ensure that new feed is loaded
        });
    });

});


