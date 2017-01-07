/* global hexo */
'use strict';

hexo.extend.helper.register('getposttop', function(posts) {
  var havetop = posts.filter(function(data){return data.top!=null;});
  var posts = havetop.sort("-date");
  if(posts.length>0){
    return posts;
  }else{
    return null;
  }
});

hexo.extend.helper.register('hasposttop', function(posts) {
  var havetop = posts.filter(function(data){return data.top!=null;});
  if(havetop.length>0){
    return true;
  }else{
    return false;
  }
});