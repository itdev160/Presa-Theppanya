$(function() {
    var data = [
        {
            id: 1,
            title: 'Contagious Ripple',
            body: 'Whoever is happy will make others happy too.',
            author: 'Anne Frank'
        },
        {
            id: 2,
            title: 'Trail Blazer',
            body: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
            author: 'Ralph Waldo Emerson'
        },
        {
            id: 3,
            title: 'Live as you dream it',
            body: 'Go confidently in the direction of your dreams! Live the life you have imagined.',
            author: 'Henry David Thoreau'
        },
        {
            id: 4,
            title: 'Consume life',
            body: 'Live in the sunshine, swim in the sea, drink the wild air.',
            author: 'Ralph Waldo Emerson'
        },
        {
            id: 5,
            title: 'Can not play',
            body: 'You can play basketball but you can not play boxing.',
            author: 'Snoop Dogg aka Snoop Lion aka Uncle Snoop'
        }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#posts-container');

    function initPosts() {
        for (let i = 0; i < data.length; i++) {
            //Creating Elements
            var postId = 'post-' + data[i].id,
                $post = $('<section class="post"></section>'),
                $title = $('<h2 class="title"></h2>'),
                $body = $('<blockquote></blockquote>'),
                $author = $('<span class="author"></span>'),
                $navItem = $('<li></li>');

            //add post data
            $title.text(data[i].title);
            $body.text(data[i].body);
            $author.text(data[i].author);

            //add nav item data
            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            //combine post elements
            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            //add post and nav elements to page
            $posts.append($post);
            $nav.append($navItem);

            //wire up nav item click event handler
            $navItem.on('click', function() {
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            //hide all posts and show the intro
            $posts.children('.post').hide();
            $intro.fadeIn(1000);
        }
    }

    initPosts();
});