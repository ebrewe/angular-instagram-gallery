angular.module('instagramGallery')

.factory('instagram', function($resource){
    return {
        fetchPopular: function(callback){
            var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
                client_id:'d6f4f1be7f764f8683651825e1e7d5f7'
                
            }, {
                fetch: {method: 'JSONP'}
            });
            
            api.fetch(function(response){
                callback(response.data);
            })
        }
    }
})