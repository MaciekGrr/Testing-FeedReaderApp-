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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('have defined, not empty url', function() {
        for (const feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url).not.toBe(0);
            };
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have defined, not empty name property', function() {
            for (const feed of allFeeds) {
            expect(feed.name).toBeDefined();
            expect(feed.name).not.toBe(0);
            }
        });

    });
});
    /* TODO: Write a new test suite named "The menu" */


$(function(){

    describe('The menu', function() {

        // .attr(), .prop(), .css()
          /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('have menu elements is defined and hidden by default', function(){           
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */  
      
        it('ensure visibility changes when menu clicked', function(){    
            var menuIcon = $('.menu-icon-link');
            var bodyHidden = $('body').hasClass('menu-hidden');

            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });                 
    });
});


$(function(){     /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        beforeEach(function(done) {  // asynchronus test
            loadFeed(0, function() {  // we need to check what is the result of running LoadFeed
            done();
            });
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.

         Unfortunately this is not comprehensive enough. The spec says,
        there is at least a single .entry element within the .feed container
        This test only checks to see if any .entry elements exist, not if they are in the .feed container.
        Tip: to get parent-child relationship, you can use this jQuery syntax:
        $('.parent .child');
        this will get all .child elements under .parent."
         */

        it('when the loadFeed function is called and completed, there is at least single .entry inside .feed container', function(){
            expect($('.feed .entry')).not.toBe(0); // we have to check if .entry is the .child of .feed
            console.log($('.entry'));
        });

    });
});


$(function(){         /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        beforeEach(function(done) {
            loadFeed(0, function() {    // we load and save feed 0 BEFORE the test
            const entry1 = $('.entry');                      
            });
            loadFeed(1, function() {    // we load and save feed 1
            const entry2 = $('.entry');                       
            });
            done();
        });
        

        it('content of next feed loaded is different that previous', function(){
            expect(entry1).not.toBe(entry2);  // we need to check if the content 1 is different than content 2 to ensure that new feed is loaded
        });
    });
});


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

