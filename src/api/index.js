import request from './utils';

const urlPrefix = '/api/common';
const urls = {
  fetchProjectDetail: '/projects/<id>',
  fetchPublishedDetail: '/projects/published',
  // tickets
  getKibanaTicket: '/tickets/kibana',
  getTableauTicket: '/tickets/tableau',
};

Object.keys(urls).map((url) => {
  urls[url] = urlPrefix + urls[url];
  return url;
});

export default new function API () {
  this.fetchProjectDetail = id => request.get(urls.fetchProjectDetail.replace('<id>', id));
  this.fetchPublishedDetail = id => request.get(urls.fetchPublishedDetail);
  // tickets
  this.getKibanaTicket = param => request.get(urls.getKibanaTicket, param);
  this.getTableauTicket = param => request.get(urls.getTableauTicket, param);
}();
