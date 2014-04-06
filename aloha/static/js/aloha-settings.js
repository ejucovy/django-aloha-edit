Aloha = window.Aloha || {};
Aloha.settings = {
     sidebar : {
             disabled : true
     },
     plugins : {
             load : [ 'common/ui', 'common/commands', 'common/format', 'common/list',
                             'common/align', 'common/table', 'common/image', 'common/undo',
                             'common/abbr', 'common/link', 'common/contenthandler',
                             'common/paste', 'common/block', 'common/characterpicker',
                    ],
     },
     contentHandler : {
             insertHtml : [ 'word', 'blockelement', 'generic', 'sanitize',
                             'videoembed', ],
             initEditable : [ 'sanitize' ],
             getContents : [ 'blockelement', 'basic', 'removebr', 'videoembed',
                             'spoiler', 'sanitize', ],
             sanitize : 'relaxed', // relaxed, restricted, basic,
             allows : {
                     elements : [ 'a', 'abbr', 'acronym', 'b', 'blockquote', 'br', 'cite',
                                     'code', 'dd', 'del', 'div', 'dl', 'dt', 'em', 'h2', 'h3', 'h4',
                                     'h5', 'i', 'iframe', 'img', 'ins', 'li', 'ol', 'p', 'pre', 'q',
                                     'small', 'strong', 'sub', 'sup', 'table', 'td', 'th', 'tr', 'u',
                                     'ul' ],

                     attributes : {
                             'a' : [ 'href', 'rel', 'target', 'title', 'data-toggle', 'class' ],
                             'blockquote' : [ 'cite' ],
                             'q' : [ 'cite' ],
                             'img' : [ 'src', 'alt', 'title', 'style' ],
                             'iframe' : [ 'src', 'width', 'height', 'frameborder',
                                             'allowfullscreen' ],
                             'div' : [ 'class', 'id', 'style', 'data-id', 'data-params' ],
                             'span' : [ 'class' ],
                             'p' : [ 'style' ],
                             'table' : [ 'class' ],
                             'td' : [ 'colspan' ],
                             'th' : [ 'colspan' ],
                             'ul' : [ 'class' ],
                             'li' : [ 'class' ],
                             'i' : [ 'class' ],
                             'span' : [ 'class' ],
                     },

                     protocols : {
                             'a' : {
                                     'href' : [ 'ftp', 'http', 'https', 'mailto', '__relative__' ]
                             }, // Sanitize.RELATIVE
                             'blockquote' : {
                                     'cite' : [ 'http', 'https', '__relative__' ]
                             },
                             'q' : {
                                     'cite' : [ 'http', 'https', '__relative__' ]
                             },
                             'img' : {
                                     'src' : [ 'http', 'https', 'data', '__relative__' ]
                             },
                             'iframe' : {
                                     'src' : [ 'http', 'https', '__relative__' ]
                             }
                     }
             }
     },
     toolbar : {
             tabs : [
                             {
                                     label : 'tab.format.label',
                                     showOn : {
                                             scope : 'Aloha.continuoustext'
                                     },
                                     components : [
                                                     [ 'bold', 'strong', 'italic', 'emphasis', '\n',
                                                                     'subscript', 'superscript', 'strikethrough',
                                                                     'quote', ],
                                                     [ 'formatLink', 'formatAbbr', 'formatNumeratedHeaders',
                                                                     'toggleDragDrop', '\n', 'formatSpoilers',
                                                                     'formatThumbnail', 'addVideo', '\n',
                                                                     'toggleMetaView', 'wailang',
                                                                     'toggleFormatlessPaste', ],
                                                     [ 'alignLeft', 'alignCenter', 'alignRight',
                                                                     'alignJustify', '\n', 'orderedList',
                                                                     'unorderedList', 'indentList', 'outdentList' ],
                                                     [ 'formatBlock' ] ]
                             },
                             {
                                     label : "tab.insert.label",
                                     showOn : {
                                             scope : 'Aloha.continuoustext'
                                     },
                                     components : [ [ "createTable", "characterPicker", "insertLink",
                                                     "insertImage", "insertAbbr", "insertToc",
                                                     "insertHorizontalRule", "insertTag", 'insertSpoilers',
                                                     'insertVideo', 'insertThumbnail', ] ]
                             },
                             {
                                     label : "tab.img.label",
                                     showOn : {
                                             scope : 'image'
                                     },
                                     components : [
                                                     [ "imageSource", "\n", "imageTitle" ],
                                                     [ "imageResizeWidth", "\n", "imageResizeHeight" ],
                                                     [ "imageAlignLeft", "imageAlignRight", "imageAlignNone",
                                                                     "\n", "imageCropButton", "imageCnrReset",
                                                                     "imageCnrRatio", ], [ "imageBrowser" ],
                                                     [ "wrapThumbnail", ] ]
                             },
                             {
                                     label : "Thumbnail",
                                     showOn : {
                                             scope : 'Aloha.Block.ThumbnailBlock'
                                     },
                                     components : [
                                                     [ "thumbnailSrc", "thumbnailCaption", "thumbnailRemove", ],
                                                     [ "\n", "thumbnailAlignLeft", "thumbnailAlignRight",
                                                                     "thumbnailAlignNone" ] ]
                             }, {
                                     label : "Spoiler",
                                     showOn : {
                                             scope : 'Aloha.Block.SpoilerBlock'
                                     },
                                     components : [ [ "spoilerTitle", "spoilerRemove", ], ]
                             }, {
                                     label : "Video",
                                     showOn : {
                                             scope : 'Aloha.Block.VideoBlock'
                                     },
                                     components : [ [ "videoSrc", ], ]
                             }, {
                                     label : "YouTube",
                                     showOn : {
                                             scope : 'Aloha.Block.YoutubeBlock'
                                     },
                                     components : [ [ "videoId", "videoParams", "videoRemove" ], ]
                             }, ]
     },
     bundles : {
             // Path for custom bundle relative from require.js path
             user : '../../js/aloha-plugins'
     }
};
