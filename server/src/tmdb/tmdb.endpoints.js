import tmdbConfig from "./tmdb.config.js";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#default_import
//https://medium.com/dailyjs/using-import-aliases-in-javascript-a0b46237601c
const tmdbEndpoints={
  mediaList:({mediaType, mediaCategory,page})=>tmdbConfig.getUrl(
    `${mediaType}/${mediaCategory}`, {page}
  ),
  mediaDetail:({mediaType, mediaId})=>tmdbConfig.getUrl(
    `${mediaType}/${mediaId}`
  ),
  mediaGenres:({mediaType})=>tmdbConfig.getUrl(
    `genre/${mediaType}/list`
  ),
  mediaCredits:({mediaType,mediaId})=>tmdbConfig.getUrl(
    `${mediaType}/${mediaId}/credits`
  ),
  mediaVideos:({mediaType, mediaId})=>tmdbConfig.getUrl(
    `${mediaType}/${mediaId}/videos`
  ),
  mediaRecommand:({mediaType, mediaId})=>tmdbConfig.getUrl(
    `${mediaType}/${mediaId}/videos`
  )

}