'use strict'

let filters = [];

function Filter (rawDataObj) {
  this.id = rawDataObj.id;
}

Filter.prototype.toHtml = function() {
  let templateHtml = $('#filter-template').text();
  let renderTemplate = Handlebars.compile(templateHtml);
  return renderTemplate(this);
};

let rawFilterData = [{id: 'author'},{id: 'category'}];

rawFilterData.forEach(filterObject => {
  filters.push(new Filter(filterObject));
});

filters.forEach(filter => {
  $('#filters').append(filter.toHtml());
});