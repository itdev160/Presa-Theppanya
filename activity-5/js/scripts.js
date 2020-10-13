/**
 * Wrap everything in an IIFE
 */
(function() {

    /**************************************
     * Extension data and constructor objects
     **************************************/

     // Extension data array (simulated data source, such as JSON or database records
    var data = [
        {
            name: 'GitLens-Git supercharged',
            description: 'It SUPERCHARGES the Git capabilities built into VS Code.',
            author: 'Eric Amodio',
            url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
            downloads: 6649914,
            stars: 389,
            price: 'Free',
            selector: 'p1'
        },
        {
            name: 'Liquid Language Support',
            description: 'It adds syntax highlighting for Liquid which is not supported on VS Code.',
            author: 'Neil Ding',
            url: 'https://marketplace.visualstudio.com/items?itemName=neilding.language-liquid#overview',
            downloads: 83329,
            stars: 4,
            price: 'Free',
            selector: 'p2'
        },
        {
            name: 'Settings Sync',
            description: 'It synchronizes settings, snippets, themes and more across multiple platforms.',
            author: 'Shan Khan',
            url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
            downloads: 2025063,
            stars: 639,
            price: 'Free',
            selector: 'p3'
        }
    ];

    function Extension(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    /*******************
     * Utility Functions
     *******************/

    //Returns today's date, format
    var getTodaysDate = function () {
        var today = new Date();
        return today.toDateString();
    };

    //Return DOM element by id
    var getEl = function (id) {
        return document.getElementById(id);
    };

    //Writes the extension object data to the
    //appropriate DOM elements utilizing the package selector property.
    var writeExtensionInfo = function(extension) {
        //Get reference to DOM elements
        var selector = extension.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars'),
            priceEl = getEl(selector + '-price');
    
        //Write Extension to the DOM elements
        nameEl.textContent = extension.name;
        descEl.textContent = extension.description;
        authEl.textContent = extension.author;
        downloadEl.textContent = extension.getFormattedDownloads();
        starsEl.textContent = extension.getFormattedStars();
        priceEl.textContent = extension.price;
    };

    //write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    //write Extension data 1 by 1
    var gitLens = new Extension(data[0]);
    writeExtensionInfo(gitLens);

    var liquid = new Extension(data[1]);
    writeExtensionInfo(liquid);

    var settings = new Extension(data[2]);
    writeExtensionInfo(settings);

} ());