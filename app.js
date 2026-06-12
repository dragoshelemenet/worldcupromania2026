const $ = id => document.getElementById(id);
const ASSETS = {"logo1": {"src": "assets/logo_main_transparent_white (2).png", "ratio": 1.0}, "logo2": {"src": "assets/extracted_embedded/embedded_07ff6495652e.png", "ratio": 1.0}, "logo3": {"src": "assets/extracted_embedded/embedded_d9d860717b92.jpg", "ratio": 1.0}, "logo4": {"src": "assets/extracted_embedded/embedded_11e7226f3f1c.jpg", "ratio": 1.0}, "officialBg": {"src": "assets/extracted_embedded/embedded_f9eea3b90fa6.png", "ratio": 1.7768331562167907}, "frp1": {"src": "assets/extracted_embedded/embedded_028ac431b13e.png", "ratio": 1.0}, "frp2": {"src": "assets/extracted_embedded/embedded_9056bf63e0db.webp", "ratio": 1.3167883211678832}, "agency1": {"src": "assets/extracted_embedded/embedded_56a76c9a6fcf.png", "ratio": 4.830188679245283}, "agency2": {"src": "assets/extracted_embedded/embedded_a0e6353a12d9.jpg", "ratio": 1.0}, "agency3": {"src": "assets/extracted_embedded/embedded_3f160ae5814a.jpg", "ratio": 2.628205128205128}};
ASSETS['bgAlt1'] = {src: 'assets/extracted_embedded/embedded_f09ecd25396f.jpg', ratio: 1.7916666666666667};
ASSETS['bgAlt2'] = {src: 'assets/official_cover_alt_neon_court.jpg', ratio: 1.7917760279965005};
ASSETS['masterLogoOfficial'] = {src: 'assets/master_logo_official.png', ratio: 1.7662037037037037};
ASSETS['officialBg'] = {src: 'assets/official_announcement_bg_landscape.jpg', ratio: 1.7917760279965005};
ASSETS['bgAlt3'] = {src: 'assets/official_announcement_bg_social.jpg', ratio: 1.3394375408763899};
ASSETS['bgAlt4'] = {src: 'assets/official_announcement_bg_poster.jpg', ratio: 0.74658203125};
ASSETS['bgAlt5'] = {src: 'assets/official_announcement_bg_square.jpg', ratio: 1.0};
ASSETS['welcomeEventLogo'] = {"src": "assets/welcome_event_logo.png", "ratio": 1.7917133258678613};
ASSETS['welcomeEventBgLandscape'] = {"src": "assets/welcome_event_bg_landscape.jpg", "ratio": 1.7917760279965005};
ASSETS['welcomeEventBgStory'] = {"src": "assets/welcome_event_bg_story.jpg", "ratio": 0.55810546875};
ASSETS['welcomeEventBgPoster'] = {"src": "assets/welcome_event_bg_poster.jpg", "ratio": 0.74658203125};
ASSETS['welcomeEventBgSquare'] = {"src": "assets/welcome_event_bg_square.jpg", "ratio": 1.0};
ASSETS['welcomeEventBgSocial'] = {"src": "assets/welcome_event_bg_social.jpg", "ratio": 1.3394375408763899};
const TEMPLATE_META = {
  master:{title:'Official Cover',subtitle:'Main cover poster'},
  announcement:{title:'Official Announcement',subtitle:'Official announcement poster'},
  officialPoster:{title:'Official Poster',subtitle:'Poster-only official layout'},
  welcome:{title:'Official Event',subtitle:'Official event poster'},
  country:{title:'Country Confirmed',subtitle:'Country / team confirmation'},
  player:{title:'Player Announcement',subtitle:'Player announcement card'},
  bio:{title:'Player Profile',subtitle:'Player bio + palmares card'}
};
const TEMPLATE_DEFAULTS = {
  master: { format:'landscape', backgroundPreset:'officialBg', headline:'THE WORLD COMES TO ROMANIA', hostedText:'ORGANIZAT DE FEDERAȚIA ROMÂNĂ DE PADBOL', hashtag:'#RomaniaWelcomesTheWorld', agencySupportText:'', styles:{ headline:{x:50,y:82,size:6.7,scale:1,anchor:'middle',maxW:72}, hostedText:{x:50,y:90,size:2.8,scale:1,anchor:'middle',maxW:66}, hashtag:{x:88,y:96.2,size:2.7,scale:1,anchor:'end',maxW:36}, agencySupportText:{x:50,y:97.4,size:1.6,scale:1,anchor:'middle',maxW:52} }, mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:23,w:27,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'} },
  announcement: { format:'landscape', backgroundPreset:'announcementBgLandscape', headline:'PADBOL\nWORLD CUP\nROMANIA 2026', hostedText:'OFFICIAL ANNOUNCEMENT', hashtag:'#RomaniaWelcomesTheWorld', agencySupportText:'', styles:{ headline:{x:5.5,y:17.5,size:9.6,scale:1,anchor:'start',maxW:42}, hostedText:{x:5.5,y:67,size:5.0,scale:1,anchor:'start',maxW:44}, hashtag:{x:5.5,y:79,size:2.6,scale:1,anchor:'start',maxW:46}, agencySupportText:{x:92,y:97,size:1.8,scale:1,anchor:'end',maxW:30} }, mainLogo:{preset:'announcementLogo',useCustom:false,show:true,x:91.5,y:13,w:14.5,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'} },
  officialPoster: {"format":"poster","backgroundPreset":"officialPosterBg","welcomeLine":"WELCOME TO","titleLines":"PADBOL\nWORLD CUP\nROMANIA 2026","subLine":"ROMANIA 2026","venue":"SALA POLIVALENTĂ BUCUREȘTI","date":"30 SEPTEMBRIE – 3 OCTOMBRIE 2026","website":"WWW.FRPADBOL.RO","hashtag":"#RomaniaWelcomesTheWorld","hostedText":"ORGANIZAT DE FEDERAȚIA ROMÂNĂ DE PADBOL","styles":{"welcomeLine":{"x":50.76,"y":32.13,"size":4,"scale":1.25,"anchor":"middle","maxW":74,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"titleLines":{"x":50.18,"y":42.35,"size":7.6,"scale":0.98,"anchor":"middle","maxW":78,"gradient":true,"gradientStart":"#b78723","gradientEnd":"#f7dd8b","outline":true,"outlineWidth":1.4,"outlineColor":"#163878","shadow":true,"shadowDx":4.8,"shadowDy":6,"shadowBlur":4.8,"shadowColor":"#15305f","fontFamily":"Tahoma, Verdana, sans-serif","fontWeight":900,"italic":false},"subLine":{"x":50.25,"y":67.22,"size":4.6,"scale":0.75,"anchor":"middle","maxW":58,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"venue":{"x":50,"y":75.5,"size":3.3,"scale":1,"anchor":"middle","maxW":58,"gradient":true,"gradientStart":"#b78723","gradientEnd":"#f7dd8b","fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false},"date":{"x":50,"y":80,"size":3.3,"scale":1,"anchor":"middle","maxW":52,"gradient":true,"gradientStart":"#b78723","gradientEnd":"#f7dd8b","fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false},"website":{"x":49.92,"y":89.06,"size":2.3,"scale":1,"anchor":"middle","maxW":62,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50.17,"y":91.87,"size":2,"scale":1,"anchor":"middle","maxW":72,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hostedText":{"x":50.08,"y":94.6,"size":1.8,"scale":1,"anchor":"middle","maxW":80,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"officialPosterLogo","useCustom":false,"show":true,"x":50,"y":15.3,"w":34,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":25,"y":95,"w":9,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":58,"y":95,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"}},
  welcome: { format:'landscape', backgroundPreset:'welcomeEventBgLandscape', titleLines:'PADBOL WORLD CUP\nROMANIA 2026', venue:'ROMANIA 2026', date:'OFFICIAL EVENT', website:'#RomaniaWelcomesTheWorld', styles:{ titleLines:{x:50,y:35,size:7.8,scale:1,anchor:'middle',maxW:74}, venue:{x:50,y:62,size:5.0,scale:1,anchor:'middle',maxW:48}, date:{x:50,y:72,size:4.8,scale:1,anchor:'middle',maxW:52}, website:{x:50,y:90,size:2.3,scale:1,anchor:'middle',maxW:60} }, mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:12,w:20,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:25,y:95,w:9,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:58,y:95,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'} },
  country: { format:'landscape', backgroundPreset:'countryBgMain', titleLines:'TEAM\nCONFIRMED', country:'[COUNTRY NAME]', footerTop:'PADBOL WORLD CUP ROMANIA 2026', footerBottom:'SEE YOU IN ROMANIA', hashtag:'#RomaniaWelcomesTheWorld', styles:{ titleLines:{x:14.99,y:46.44,size:6.2,scale:1.29,anchor:'middle',maxW:24,gradient:true,gradientStart:'#b78723',gradientEnd:'#f7dd8b',outline:true,outlineWidth:1.3,outlineColor:'#1d1203',shadow:true,shadowDx:.65,shadowDy:.85,shadowBlur:1.7,shadowColor:'#0c0b10'}, country:{x:68.5,y:76.3,size:8.8,scale:1,anchor:'middle',maxW:54,outline:true,outlineWidth:2.6,outlineColor:'#b78628',shadow:true,shadowDx:.7,shadowDy:.9,shadowBlur:1.9,shadowColor:'#0c0b10'}, footerTop:{x:4.8,y:89.56,size:4.0,scale:1,anchor:'start',maxW:48,gradient:false}, footerBottom:{x:4.8,y:95.5,size:4.8,scale:1,anchor:'start',maxW:42,outline:false}, hashtag:{x:95.5,y:92.2,size:3.0,scale:1,anchor:'end',maxW:34,gradient:true,gradientStart:'#b78723',gradientEnd:'#f7dd8b',shadow:true,shadowDx:.5,shadowDy:.6,shadowBlur:1.2,shadowColor:'#051127'} }, mainLogo:{preset:'logo1',useCustom:false,show:true,x:15.14,y:21.27,w:26.69,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, countryOverlay:{show:true,opacity:0.16,x:63.93,y:37.55,w:24.54}, countryFigure:{show:true,preset:'countryFigure1',x:63.93,y:37.55,w:24.54,opacity:0.88}, frp:{preset:'frp1',useCustom:false,show:false,x:12,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'} },
  player: { format:'landscape', announcementLabel:'PLAYER ANNOUNCEMENT', player:'[PLAYER NAME]', country:'[COUNTRY]', footerLines:'PADBOL WORLD CUP\nROMANIA 2026', hashtag:'#RomaniaWelcomesTheWorld', styles:{ announcementLabel:{x:6,y:38.5,size:5.0,scale:1,anchor:'start',maxW:32}, player:{x:6,y:49.5,size:7.4,scale:1,anchor:'start',maxW:38}, country:{x:6,y:59.5,size:4.6,scale:1,anchor:'start',maxW:20}, footerLines:{x:6,y:79,size:6.0,scale:1,anchor:'start',maxW:32}, hashtag:{x:50,y:93.5,size:3.0,scale:1,anchor:'middle',maxW:44} }, mainLogo:{preset:'logo1',useCustom:false,show:true,x:14.5,y:16,w:20,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'} },
  bio: { format:'landscape', player:'[PLAYER NAME]', country:'[COUNTRY]', bioText:'Write the player description and palmares here.', sectionLabel:'PALMARES / PROFILE', footerLines:'PADBOL WORLD CUP\nROMANIA 2026', hashtag:'#RomaniaWelcomesTheWorld', styles:{ player:{x:8,y:38,size:4.8,scale:1,anchor:'start',maxW:32}, country:{x:8,y:45,size:3.8,scale:1,anchor:'start',maxW:22}, sectionLabel:{x:8,y:61,size:2.4,scale:1,anchor:'start',maxW:26}, bioText:{x:8,y:66,size:2.3,scale:1,anchor:'start',maxW:34}, footerLines:{x:8,y:90,size:4.2,scale:1,anchor:'start',maxW:34}, hashtag:{x:92,y:95,size:2.4,scale:1,anchor:'end',maxW:24} }, mainLogo:{preset:'logo1',useCustom:false,show:true,x:17,y:14,w:20,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'} }
};
ASSETS['playerBg1'] = {src: 'assets/extracted_embedded/embedded_e65a37fea801.jpg', ratio: 1.7917760279965005};
ASSETS['playerBg2'] = {src: 'assets/official_cover_alt_logo_court.jpg', ratio: 1.7917760279965005};
ASSETS['playerBg3'] = {src: 'assets/reference/reference_player.png', ratio: 1.7917133258678613};
ASSETS['playerFrame1'] = {src: 'assets/extracted_embedded/embedded_5244d44dd1c3.png', ratio: 1.0};
ASSETS['playerBgStory1'] = {src: 'assets/playerBg_story1.jpg', ratio: 1143/2048};
ASSETS['playerBgStory2'] = {src: 'assets/playerBg_story2.jpg', ratio: 1143/2048};
ASSETS['playerBgSquare1'] = {src: 'assets/playerBg_square1.jpg', ratio: 1};
ASSETS['playerBgSquare2'] = {src: 'assets/playerBg_square2.jpg', ratio: 1};
const PLAYER_BG_OPTIONS = [
  {key:'playerBg1', label:'Default landscape', note:'Best for 16:9 landscape'},
  {key:'playerBgStory1', label:'Vertical option 1', note:'Best for 9:16 story • also good for 2:3 poster'},
  {key:'playerBgStory2', label:'Vertical option 2', note:'Best for 9:16 story • also good for 2:3 poster'},
  {key:'playerBgSquare1', label:'Square option 1', note:'Best for 1:1 square • also good for 4:5 feed'},
  {key:'playerBgSquare2', label:'Square option 2', note:'Best for 1:1 square • also good for 4:5 feed'}
];

ASSETS['officialCoverAltFirefly'] = {src:'assets/official_cover_alt_firefly.jpg', ratio: 16/9};
ASSETS['officialCoverAltLogoCourt'] = {src:'assets/official_cover_alt_logo_court.jpg', ratio: 16/9};
ASSETS['officialCoverAltNeonCourt'] = {src:'assets/official_cover_alt_neon_court.jpg', ratio: 16/9};
ASSETS['announcementLogo'] = {src:'assets/announcement_logo_default.jpg', ratio: 1};
ASSETS['announcementBgLandscape'] = {src:'assets/official_announcement_bg_landscape.jpg', ratio: 2048/1143};
ASSETS['announcementBgStory'] = {src:'assets/official_announcement_bg_story.jpg', ratio: 1529/2048};
ASSETS['announcementBgSocial'] = {src:'assets/official_announcement_bg_social.jpg', ratio: 2048/1529};
ASSETS['announcementBgSquare'] = {src:'assets/official_announcement_bg_square.jpg', ratio: 1};
ASSETS['announcementBgPoster'] = {src:'assets/official_announcement_bg_poster.jpg', ratio: 1529/2048};
ASSETS['announcementBgPosterFrame'] = {src:'assets/official_announcement_bg_poster_frame.jpg', ratio: 1529/2048};
ASSETS['officialPosterBg'] = {src:'assets/official_poster_bg_new.png', ratio: 1024/1536};
ASSETS['officialPosterLogo'] = {src:'assets/official_poster_logo.png', ratio: 1};
const ANNOUNCEMENT_BG_OPTIONS = [
  {key:'announcementBgLandscape', label:'Landscape default', note:'Best for 16:9 landscape', formats:['landscape']},
  {key:'announcementBgStory', label:'Story default', note:'Best for 9:16 story', formats:['story']},
  {key:'announcementBgPoster', label:'Poster default', note:'Best for 2:3 poster', formats:['poster']},
  {key:'announcementBgPosterFrame', label:'Poster frame alt', note:'White-frame poster option for 2:3 poster', formats:['poster']},
  {key:'announcementBgSquare', label:'Square default', note:'Best for 1:1 square', formats:['square']},
  {key:'announcementBgSocial', label:'Feed default', note:'Best for 4:5 feed', formats:['social']}
];
ASSETS['logo1'] = {src:'assets/logo_main_transparent_white (2).png', ratio: 1};
ASSETS['logo2'] = {src:'assets/logo_main_transparent_dark.png', ratio: 1};
ASSETS['logo3'] = {src:'assets/logo_main_blue_bg.jpg', ratio: 1};
ASSETS['logo4'] = {src:'assets/logo_main_white_bg.jpg', ratio: 1};
ASSETS['teamBg1'] = {src:'assets/team_bg_1.jpg', ratio: 16/9};
ASSETS['teamBg2'] = {src:'assets/team_bg_2.jpg', ratio: 16/9};
ASSETS['countryBgMain'] = {src:'assets/country_bg_main_landscape.jpg', ratio: 16/9};
ASSETS['countryBgMainLandscape'] = {src:'assets/country_bg_main_landscape.jpg', ratio: 16/9};
ASSETS['countryBgMainSquare'] = {src:'assets/country_bg_main_square.jpg', ratio: 1};
ASSETS['countryBgMainStory'] = {src:'assets/country_bg_confirmed_story_poster.jpg', ratio: 9/16};
ASSETS['countryBgMainSocial'] = {src:'assets/country_bg_main_social.jpg', ratio: 2048/1529};
ASSETS['countryBgMainPoster'] = {src:'assets/country_bg_confirmed_story_poster.jpg', ratio: 9/16};
ASSETS['teamCourt'] = {src:'assets/team_court_overlay.png', ratio: 1536/1024};
ASSETS['teamTrails'] = {src:'assets/team_trails.png', ratio: 16/9};
ASSETS['countryShadow'] = {src:'assets/country_player_shadow.png', ratio: 1536/1024};
ASSETS['countryFigure1'] = {src:'assets/country_figure_1.png', ratio: 1};
ASSETS['countryFigure2'] = {src:'assets/country_figure_2.png', ratio: 1};
ASSETS['countryFigure3'] = {src:'assets/country_figure_3.png', ratio: 1};
ASSETS['countryFigure4'] = {src:'assets/country_figure_4.png', ratio: 1};
ASSETS['countryFigure5'] = {src:'assets/country_figure_5.png', ratio: 1};
ASSETS['countryFigure6'] = {src:'assets/country_figure_6.png', ratio: 1};
ASSETS['countryFigure7'] = {src:'assets/country_figure_7.png', ratio: 1};
const COUNTRY_BG_OPTIONS = [
  {key:'countryBgMain', label:'Main reference version', note:'Uses the supplied new design across all ratios including 9:16'},
  {key:'teamBg1', label:'Alternative version 1', note:'Previous country stripe template kept as an option'},
  {key:'teamBg2', label:'Alternative version 2', note:'Softer stripe alternative'}
];
const COUNTRY_FIGURE_OPTIONS = [
  {value:'none', label:'None / hide playing figure'},
  {value:'countryFigure1', label:'Figure option 1'},
  {value:'countryFigure2', label:'Figure option 2'},
  {value:'countryFigure3', label:'Figure option 3'},
  {value:'countryFigure4', label:'Figure option 4'},
  {value:'countryFigure5', label:'Figure option 5'},
  {value:'countryFigure6', label:'Figure option 6'},
  {value:'countryFigure7', label:'Figure option 7'},
  {value:'countryShadow', label:'Classic figure'}
];
const imageStore = {photo:null, welcomeBg:null, posterBg:null, playerBg:null, countryBg:null, playerPhoto:null, flag:null, customMainLogo:null, customFrpLogo:null, customAgencyLogo:null, extraAsset1:null, extraAsset2:null, customFipaLogo:null, customPrimaLogo:null};
const LOGO_PRESETS = {
  mainLogo:[
    {value:'logo1',label:'Main logo — official transparent white (default)'},
    {value:'announcementLogo',label:'Official announcement logo'},
    {value:'officialPosterLogo',label:'Official poster logo'},
    {value:'logo2',label:'Transparent dark text'},
    {value:'logo3',label:'Blue background preview'},
    {value:'logo4',label:'White background preview'}
  ],
  frp:[
    {value:'none',label:'None / hide this logo'},
    {value:'frp1',label:'FRP Option 1'},
    {value:'frp2',label:'FRP Option 2'}
  ],
  agency:[
    {value:'none',label:'None / hide this logo'},
    {value:'agency1',label:'Agency Option 1 — official lockup'},
    {value:'agency2',label:'Agency Option 2 — square seal'},
    {value:'agency3',label:'Agency Option 3 — full lockup'}
  ],
  fipa:[
    {value:'none',label:'None / hide this logo'},
    {value:'fipaWhiteLogo',label:'FIPA White Logo'}
  ],
  prima:[
    {value:'none',label:'None / hide this logo'},
    {value:'primaSportLogo',label:'Prima Sport Logo'}
  ]
};
const FLAG_LIST = [{"code": "ly", "name": "Libya", "search": "Libya Libya LY"}, {"code": "ar", "name": "Argentina", "search": "Argentina Argentina AR"}, {"code": "de", "name": "Germany", "search": "Germany Germany DE"}, {"code": "at", "name": "Austria", "search": "Austria Austria AT"}, {"code": "qa", "name": "Qatar", "search": "Qatar Qatar QA"}, {"code": "ro", "name": "Romania", "search": "Romania Romania RO"}, {"code": "br", "name": "Brazil", "search": "Brazil Brazil BR"}, {"code": "es", "name": "Spain", "search": "Spain Spain ES"}, {"code": "se", "name": "Sweden", "search": "Sweden Sweden SE"}, {"code": "pt", "name": "Portugal", "search": "Portugal Portugal PT"}, {"code": "bg", "name": "Bulgaria", "search": "Bulgaria Bulgary BG"}, {"code": "it", "name": "Italy", "search": "Italy Italy IT"}, {"code": "be", "name": "Belgium", "search": "Belgium Belgium BE"}, {"code": "hr", "name": "Croatia", "search": "Croatia Croatia HR"}, {"code": "ir", "name": "Iran", "search": "Iran Iran IR"}, {"code": "ae", "name": "United Arab Emirates", "search": "United Arab Emirates UAE AE"}, {"code": "cl", "name": "Chile", "search": "Chile Chile CL"}, {"code": "mx", "name": "Mexico", "search": "Mexico Mexico MX"}, {"code": "co", "name": "Colombia", "search": "Colombia Colombia CO"}, {"code": "fr", "name": "France", "search": "France France FR"}, {"code": "cy", "name": "Cyprus", "search": "Cyprus Cyprus CY"}];
ASSETS['bioPhotoGoldFrame'] = {src:'assets/extracted_embedded/embedded_9f7fb6da822d.png', ratio:1};
ASSETS['primaSportLogo'] = {src:'assets/Prima_Sport_logo.svg.png', ratio: 3};
ASSETS['fipaWhiteLogo'] = {src:'assets/Logo-FIPA-White.png', ratio: 2.5};

let currentTemplate = null;
let state = {};
let selectedKey = null;
let interaction = null;
const FORMAT_KEYS = ['landscape','square','story','social','poster'];
const PRESET_FILE_TYPE = 'padbol-worldcup-editor-preset';
let templateFormatMemory = {};
function clone(o){ return JSON.parse(JSON.stringify(o)); }
function dims(format){ return format==='square'?[1080,1080]:format==='story'?[1080,1920]:format==='poster'?(currentTemplate==='officialPoster'?[1024,1536]:[1080,1600]):format==='social'?[1080,1350]:[1600,900]; }
function recommendedPlayerBg(format){
  if(format==='landscape') return 'playerBg1';
  if(format==='square') return 'playerBgSquare1';
  if(format==='story') return 'playerBgStory1';
  if(format==='poster') return 'playerBgStory1';
  if(format==='social') return 'playerBgSquare1';
  return 'playerBg1';
}
function recommendedMasterBg(format){
  if(format==='square') return 'bgAlt1';
  if(format==='story') return 'bgAlt2';
  if(format==='poster') return 'bgAlt4';
  if(format==='social') return 'bgAlt5';
  return 'officialBg';
}
function recommendedAnnouncementBg(format){
  if(format==='square') return 'announcementBgSquare';
  if(format==='story') return 'announcementBgStory';
  if(format==='poster') return 'announcementBgPoster';
  if(format==='social') return 'announcementBgSocial';
  return 'announcementBgLandscape';
}
function recommendedOfficialPosterBg(format){
  return 'officialPosterBg';
}
function recommendedWelcomeBg(format){
  if(format==='square') return 'welcomeEventBgSquare';
  if(format==='story') return 'welcomeEventBgStory';
  if(format==='poster') return 'welcomeEventBgPoster';
  if(format==='social') return 'welcomeEventBgSocial';
  return 'welcomeEventBgLandscape';
}
function syncPlayerBackgroundToFormat(force=false){
  if(currentTemplate!=='player') return;
  if(imageStore.playerBg && !force) return;
  state.backgroundPreset = recommendedPlayerBg(state.format);
}
function recommendedCountryBg(format){ return 'countryBgMain'; }
function countryMainBgKey(format){
  if(format==='square') return 'countryBgMainSquare';
  if(format==='story') return 'countryBgMainStory';
  if(format==='poster') return 'countryBgMainPoster';
  if(format==='social') return 'countryBgMainSocial';
  return 'countryBgMainLandscape';
}
function countryBgAssetKey(preset, format){
  const key = preset || recommendedCountryBg(format);
  return key==='countryBgMain' ? countryMainBgKey(format) : key;
}
function countryFrameLayout(format, w, h){
  if(format==='square') return {x:w*.12, y:h*.25, w:w*.76, h:h*.55};
  if(format==='story') return {x:w*.09, y:h*.17, w:w*.82, h:h*.61};
  if(format==='poster') return {x:w*.14, y:h*.19, w:w*.72, h:h*.53};
  if(format==='social') return {x:w*.12, y:h*.20, w:w*.76, h:h*.55};
  return {x:w*.335, y:h*.14, w:w*.63, h:h*.575};
}
function esc(s){ return String(s ?? '').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }
function assetSrc(k){
  const src = ASSETS[k]?.src || '';
  return window.ASSET_DATA && window.ASSET_DATA[src] ? window.ASSET_DATA[src] : src;
}
function assetRatio(k){ return ASSETS[k]?.ratio || 1; }
function getPath(path){ return path.split('.').reduce((acc,key)=>acc[key], state); }
function setPath(path,val){ const parts=path.split('.'); let ref=state; for(let i=0;i<parts.length-1;i++) ref=ref[parts[i]]; ref[parts[parts.length-1]]=val; }
function updateMatchingInput(path, value){ document.querySelectorAll(`[data-path="${path}"]`).forEach(el=>{ if(el.type==='checkbox') el.checked=!!value; else el.value=value; if(el.type==='range' || el.type==='number'){ const box=el.parentElement?.querySelector('.rangeValue'); if(box) box.textContent=String(value)+(el.dataset.suffix||''); } }); }
function ensureStyleDefaults(){ Object.values(state.styles||{}).forEach(st=>{ if(st.scale==null) st.scale=1; if(st.outline==null) st.outline=false; if(st.outlineWidth==null) st.outlineWidth=1.2; if(st.outlineColor==null) st.outlineColor='#000000'; if(st.shadow==null) st.shadow=false; if(st.shadowDx==null) st.shadowDx=0.5; if(st.shadowDy==null) st.shadowDy=0.5; if(st.shadowBlur==null) st.shadowBlur=1.5; if(st.shadowColor==null) st.shadowColor='#000000'; if(st.fontFamily==null) st.fontFamily='Impact, Haettenschweiler, Arial Black, sans-serif'; if(st.fontWeight==null) st.fontWeight=900; if(st.italic==null) st.italic=false; if(st.gradient==null) st.gradient=false; if(st.gradientStart==null) st.gradientStart='#ffffff'; if(st.gradientEnd==null) st.gradientEnd='#ffffff'; }); }

function ensureCustomTexts(){
  if(!state.customTexts) state.customTexts=[];
  if(!state.styles) state.styles={};
  state.customTexts.forEach((item,i)=>{
    if(!item.id) item.id='customText_'+Date.now()+'_'+i;
    if(state[item.id]==null) state[item.id]=item.text || 'NEW TEXT';
    if(!state.styles[item.id]) state.styles[item.id]={x:50,y:50,size:4.2,scale:1,anchor:'middle',maxW:60,fontFamily:'Impact, Haettenschweiler, Arial Black, sans-serif',fontWeight:900,italic:false,gradient:false,gradientStart:'#ffffff',gradientEnd:'#f3c739',outline:false,outlineWidth:1.2,outlineColor:'#000000',shadow:false,shadowDx:0.5,shadowDy:0.5,shadowBlur:1.5,shadowColor:'#000000'};
  });
}
function addCustomText(){
  ensureCustomTexts();
  const id='customText_'+Date.now();
  state.customTexts.push({id,text:'NEW TEXT'});
  state[id]='NEW TEXT';
  state.styles[id]={x:50,y:50,size:4.2,scale:1,anchor:'middle',maxW:60,fontFamily:'Impact, Haettenschweiler, Arial Black, sans-serif',fontWeight:900,italic:false,gradient:false,gradientStart:'#ffffff',gradientEnd:'#f3c739',outline:false,outlineWidth:1.2,outlineColor:'#000000',shadow:true,shadowDx:0.8,shadowDy:1,shadowBlur:1.8,shadowColor:'#000000'};
  selectedKey=id;
  renderStage();
  buildForm();
}
function removeCustomText(id){
  ensureCustomTexts();
  state.customTexts=state.customTexts.filter(t=>t.id!==id);
  delete state[id];
  if(state.styles) delete state.styles[id];
  if(selectedKey===id) selectedKey=null;
  renderStage();
  buildForm();
}
function customTextControls(){
  ensureCustomTexts();
  const rows=state.customTexts.map((t,i)=>`<div class="control"><label>Custom text ${i+1}</label><div style="display:flex;gap:8px"><input data-path="${t.id}" value="${esc(state[t.id]||'')}" placeholder="Text"><button type="button" class="secondary" data-select-custom-text="${t.id}">Select</button><button type="button" class="secondary" data-delete-custom-text="${t.id}">Delete</button></div></div>`).join('');
  return `<div class="control"><button type="button" class="secondary" data-add-custom-text="1">+ Add new text</button></div>${rows}<p class="note compact">New text can be selected in preview or from here. After selecting it you can set position, size, font, gradient, outline and shadow.</p>`;
}
function renderCustomTexts(interactive=true){
  ensureCustomTexts();
  return state.customTexts.map(t=>renderText(t.id,{fill:'#ffffff',weight:900},interactive)).join('');
}

function deepMerge(target, src){
  for(const k in src){
    if(src[k] && typeof src[k]==='object' && !Array.isArray(src[k])){
      if(!target[k] || typeof target[k] !== 'object') target[k] = {};
      deepMerge(target[k], src[k]);
    }else target[k] = src[k];
  }
  return target;
}
const RESPONSIVE_PRESETS = {
  master: {
    landscape:{ backgroundPreset:'officialBg', mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:23,w:27,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ headline:{x:50,y:82,size:6.7,scale:1,anchor:'middle',maxW:72}, hostedText:{x:50,y:90,size:2.8,scale:1,anchor:'middle',maxW:66}, hashtag:{x:88,y:96.2,size:2.7,scale:1,anchor:'end',maxW:36}, agencySupportText:{x:50,y:97.4,size:1.6,scale:1,anchor:'middle',maxW:52} } },
    square:{ backgroundPreset:'bgAlt1', mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:22,w:34,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ headline:{x:50,y:82,size:6.0,scale:1,anchor:'middle',maxW:80}, hostedText:{x:50,y:89,size:2.6,scale:1,anchor:'middle',maxW:72}, hashtag:{x:50,y:95,size:2.5,scale:1,anchor:'middle',maxW:74}, agencySupportText:{x:50,y:97.4,size:1.5,scale:1,anchor:'middle',maxW:60} } },
    story:{ backgroundPreset:'bgAlt4', mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:16,w:32,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ headline:{x:50,y:80,size:4.7,scale:1,anchor:'middle',maxW:84}, hostedText:{x:50,y:86,size:2.2,scale:1,anchor:'middle',maxW:76}, hashtag:{x:50,y:93,size:2.1,scale:1,anchor:'middle',maxW:80}, agencySupportText:{x:50,y:96.3,size:1.4,scale:1,anchor:'middle',maxW:72} } },
    social:{ backgroundPreset:'bgAlt5', mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:19,w:31,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ headline:{x:50,y:81,size:5.4,scale:1,anchor:'middle',maxW:82}, hostedText:{x:50,y:88,size:2.5,scale:1,anchor:'middle',maxW:74}, hashtag:{x:50,y:94.5,size:2.3,scale:1,anchor:'middle',maxW:76}, agencySupportText:{x:50,y:97,size:1.4,scale:1,anchor:'middle',maxW:68} } },
    poster:{ backgroundPreset:'bgAlt4', mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:18,w:31,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ headline:{x:50,y:80.5,size:5.0,scale:1,anchor:'middle',maxW:84}, hostedText:{x:50,y:87,size:2.3,scale:1,anchor:'middle',maxW:76}, hashtag:{x:50,y:93.5,size:2.1,scale:1,anchor:'middle',maxW:80}, agencySupportText:{x:50,y:96.6,size:1.4,scale:1,anchor:'middle',maxW:74} } }
  },
  announcement: {
    landscape:{ backgroundPreset:'announcementBgLandscape', mainLogo:{preset:'announcementLogo',useCustom:false,show:true,x:91.5,y:13,w:14.5,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ headline:{x:5.5,y:17.5,size:9.6,scale:1,anchor:'start',maxW:42}, hostedText:{x:5.5,y:67,size:5.0,scale:1,anchor:'start',maxW:44}, hashtag:{x:5.5,y:79,size:2.6,scale:1,anchor:'start',maxW:46}, agencySupportText:{x:92,y:97,size:1.8,scale:1,anchor:'end',maxW:30} } },
    square:{ backgroundPreset:'announcementBgSquare', mainLogo:{preset:'announcementLogo',useCustom:false,show:true,x:84.5,y:12.5,w:22,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ headline:{x:6,y:16,size:8.2,scale:1,anchor:'start',maxW:46}, hostedText:{x:6,y:66,size:4.6,scale:1,anchor:'start',maxW:52}, hashtag:{x:6,y:77.5,size:2.5,scale:1,anchor:'start',maxW:52}, agencySupportText:{x:92,y:97,size:1.8,scale:1,anchor:'end',maxW:30} } },
    story:{ backgroundPreset:'announcementBgStory', mainLogo:{preset:'announcementLogo',useCustom:false,show:true,x:82,y:10.5,w:24,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ headline:{x:7,y:12,size:6.3,scale:1,anchor:'start',maxW:58}, hostedText:{x:7,y:43,size:3.7,scale:1,anchor:'start',maxW:58}, hashtag:{x:7,y:49.5,size:2.1,scale:1,anchor:'start',maxW:60}, agencySupportText:{x:92,y:97,size:1.8,scale:1,anchor:'end',maxW:30} } },
    social:{ backgroundPreset:'announcementBgSocial', mainLogo:{preset:'announcementLogo',useCustom:false,show:true,x:84,y:11.5,w:21,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ headline:{x:6.5,y:15,size:7.3,scale:1,anchor:'start',maxW:50}, hostedText:{x:6.5,y:58,size:4.2,scale:1,anchor:'start',maxW:54}, hashtag:{x:6.5,y:68,size:2.4,scale:1,anchor:'start',maxW:54}, agencySupportText:{x:92,y:97,size:1.8,scale:1,anchor:'end',maxW:30} } },
    poster:{ backgroundPreset:'announcementBgPoster', mainLogo:{preset:'announcementLogo',useCustom:false,show:true,x:84,y:11,w:22,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:10,y:12,w:13,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ headline:{x:7,y:12.5,size:6.0,scale:1,anchor:'start',maxW:54}, hostedText:{x:7,y:46,size:3.6,scale:1,anchor:'start',maxW:58}, hashtag:{x:7,y:52,size:2.1,scale:1,anchor:'start',maxW:58}, agencySupportText:{x:92,y:97,size:1.8,scale:1,anchor:'end',maxW:30} } }
  },
  officialPoster: {"poster":{"format":"poster","backgroundPreset":"officialPosterBg","welcomeLine":"WELCOME TO","titleLines":"PADBOL\nWORLD CUP\nROMANIA 2026","subLine":"ROMANIA 2026","venue":"SALA POLIVALENTĂ BUCUREȘTI","date":"30 SEPTEMBRIE – 3 OCTOMBRIE 2026","website":"WWW.FRPADBOL.RO","hashtag":"#RomaniaWelcomesTheWorld","hostedText":"ORGANIZAT DE FEDERAȚIA ROMÂNĂ DE PADBOL","styles":{"welcomeLine":{"x":50.76,"y":32.13,"size":4,"scale":1.25,"anchor":"middle","maxW":74,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"titleLines":{"x":50.18,"y":42.35,"size":7.6,"scale":0.98,"anchor":"middle","maxW":78,"gradient":true,"gradientStart":"#b78723","gradientEnd":"#f7dd8b","outline":true,"outlineWidth":1.4,"outlineColor":"#163878","shadow":true,"shadowDx":4.8,"shadowDy":6,"shadowBlur":4.8,"shadowColor":"#15305f","fontFamily":"Tahoma, Verdana, sans-serif","fontWeight":900,"italic":false},"subLine":{"x":50.25,"y":67.22,"size":4.6,"scale":0.75,"anchor":"middle","maxW":58,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"venue":{"x":50,"y":75.5,"size":3.3,"scale":1,"anchor":"middle","maxW":58,"gradient":true,"gradientStart":"#b78723","gradientEnd":"#f7dd8b","fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false},"date":{"x":50,"y":80,"size":3.3,"scale":1,"anchor":"middle","maxW":52,"gradient":true,"gradientStart":"#b78723","gradientEnd":"#f7dd8b","fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false},"website":{"x":49.92,"y":89.06,"size":2.3,"scale":1,"anchor":"middle","maxW":62,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50.17,"y":91.87,"size":2,"scale":1,"anchor":"middle","maxW":72,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hostedText":{"x":50.08,"y":94.6,"size":1.8,"scale":1,"anchor":"middle","maxW":80,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"officialPosterLogo","useCustom":false,"show":true,"x":50,"y":15.3,"w":34,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":25,"y":95,"w":9,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":58,"y":95,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"}}},
  welcome: {
    landscape:{ backgroundPreset:'welcomeEventBgLandscape', mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:12,w:20,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:25,y:95,w:9,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:58,y:95,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ titleLines:{x:50,y:35,size:7.8,scale:1,anchor:'middle',maxW:74}, venue:{x:50,y:62,size:5.0,scale:1,anchor:'middle',maxW:48}, date:{x:50,y:72,size:4.8,scale:1,anchor:'middle',maxW:52}, website:{x:50,y:90,size:2.3,scale:1,anchor:'middle',maxW:60} } },
    square:{ backgroundPreset:'welcomeEventBgSquare', mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:12,w:28,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:25,y:95,w:9,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:58,y:95,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ titleLines:{x:50,y:34,size:7.0,scale:1,anchor:'middle',maxW:82}, venue:{x:50,y:61,size:4.8,scale:1,anchor:'middle',maxW:64}, date:{x:50,y:71,size:4.4,scale:1,anchor:'middle',maxW:68}, website:{x:50,y:90,size:2.3,scale:1,anchor:'middle',maxW:74} } },
    story:{ backgroundPreset:'welcomeEventBgStory', mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:9.5,w:30,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:25,y:95,w:9,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:58,y:95,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ titleLines:{x:50,y:31,size:5.5,scale:1,anchor:'middle',maxW:82}, venue:{x:50,y:57,size:4.2,scale:1,anchor:'middle',maxW:74}, date:{x:50,y:66,size:4.0,scale:1,anchor:'middle',maxW:78}, website:{x:50,y:92,size:2.0,scale:1,anchor:'middle',maxW:84} } },
    social:{ backgroundPreset:'welcomeEventBgSocial', mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:11,w:26,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:25,y:95,w:9,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:58,y:95,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ titleLines:{x:50,y:33,size:6.6,scale:1,anchor:'middle',maxW:78}, venue:{x:50,y:61,size:4.5,scale:1,anchor:'middle',maxW:62}, date:{x:50,y:70,size:4.2,scale:1,anchor:'middle',maxW:66}, website:{x:50,y:89,size:2.2,scale:1,anchor:'middle',maxW:72} } },
    poster:{ backgroundPreset:'welcomeEventBgPoster', mainLogo:{preset:'logo1',useCustom:false,show:true,x:50,y:10.5,w:28,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, frp:{preset:'frp1',useCustom:false,show:false,x:25,y:95,w:9,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, agency:{preset:'agency1',useCustom:false,show:false,x:58,y:95,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ titleLines:{x:50,y:31,size:5.8,scale:1,anchor:'middle',maxW:82}, venue:{x:50,y:58,size:4.4,scale:1,anchor:'middle',maxW:72}, date:{x:50,y:67,size:4.2,scale:1,anchor:'middle',maxW:74}, website:{x:50,y:92,size:2.0,scale:1,anchor:'middle',maxW:82} } }
  },
  country: {
    landscape: {
      mainLogo:{show:true,x:15.14,y:21.27,w:26.69,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
      countryFigure:{x:63.93,y:37.55,w:24.54,opacity:0.88},
      countryOverlay:{show:true,opacity:0.16,x:63.93,y:37.55,w:24.54},
      styles:{
        titleLines:{x:14.99,y:46.44,size:6.2,scale:1.29,anchor:'middle',maxW:24},
        country:{x:68.5,y:76.3,size:8.8,scale:1,anchor:'middle',maxW:54},
        footerTop:{x:4.8,y:88.2,size:4.0,scale:1,anchor:'start',maxW:48},
        footerBottom:{x:4.8,y:95.5,size:4.8,scale:1,anchor:'start',maxW:42},
        hashtag:{x:95.5,y:92.2,size:3.0,scale:1,anchor:'end',maxW:34}
      }
    },
    square: {
      mainLogo:{show:true,x:50.72,y:13.94,w:25.12,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
      countryFigure:{x:34,y:61,w:34,opacity:0.88},
      countryOverlay:{show:true,opacity:0.16,x:34,y:61,w:34},
      styles:{
        titleLines:{x:50,y:42.5,size:5.4,scale:1,anchor:'middle',maxW:42},
        country:{x:50,y:79,size:7.7,scale:1.1,anchor:'middle',maxW:72},
        footerTop:{x:7.5,y:90.8,size:3.0,scale:1,anchor:'start',maxW:58},
        footerBottom:{x:50,y:85.6,size:4.0,scale:1,anchor:'middle',maxW:66},
        hashtag:{x:95,y:95.2,size:2.35,scale:1,anchor:'end',maxW:38}
      }
    },
    story: {
      mainLogo:{show:true,x:50,y:13.2,w:31.5,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
      countryFigure:{x:40.78,y:43.18,w:49.73,opacity:0.88},
      countryOverlay:{show:true,opacity:0.16,x:40.78,y:43.18,w:49.73},
      styles:{
        titleLines:{x:50.23,y:19.38,size:4.2,scale:0.86,anchor:'middle',maxW:42,gradient:true,gradientStart:'#b78723',gradientEnd:'#f7dd8b',outline:true,outlineWidth:1.2,outlineColor:'#1d1203',shadow:true,shadowDx:.55,shadowDy:.7,shadowBlur:1.5,shadowColor:'#0c0b10'},
        country:{x:4.01,y:84.43,size:6.2,scale:1.38,anchor:'start',maxW:92,gradient:true,gradientStart:'#153d92',gradientEnd:'#2a66c9',outline:true,outlineWidth:1.6,outlineColor:'#ffffff',shadow:true,shadowDx:.45,shadowDy:.55,shadowBlur:1.0,shadowColor:'#102246'},
        footerTop:{x:4.4,y:90.6,size:2.55,scale:1,anchor:'start',maxW:74},
        footerBottom:{x:4.4,y:95,size:3.35,scale:1,anchor:'start',maxW:78},
        hashtag:{x:95,y:96.3,size:2.15,scale:1,anchor:'end',maxW:42,gradient:true,gradientStart:'#153d92',gradientEnd:'#2a66c9'}
      }
    },
    poster: {
      mainLogo:{show:true,x:50,y:12.8,w:28.2,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
      countryFigure:{x:39.5,y:43.8,w:48,opacity:0.88},
      countryOverlay:{show:true,opacity:0.16,x:39.5,y:43.8,w:48},
      styles:{
        titleLines:{x:50,y:20.8,size:4.0,scale:0.9,anchor:'middle',maxW:42,gradient:true,gradientStart:'#b78723',gradientEnd:'#f7dd8b',outline:true,outlineWidth:1.2,outlineColor:'#1d1203',shadow:true,shadowDx:.55,shadowDy:.7,shadowBlur:1.5,shadowColor:'#0c0b10'},
        country:{x:4.2,y:84.2,size:6.5,scale:1.24,anchor:'start',maxW:90,gradient:true,gradientStart:'#153d92',gradientEnd:'#2a66c9',outline:true,outlineWidth:1.5,outlineColor:'#ffffff',shadow:true,shadowDx:.45,shadowDy:.55,shadowBlur:1.0,shadowColor:'#102246'},
        footerTop:{x:4.8,y:90.3,size:2.55,scale:1,anchor:'start',maxW:72},
        footerBottom:{x:4.8,y:94.8,size:3.35,scale:1,anchor:'start',maxW:78},
        hashtag:{x:95,y:96,size:2.05,scale:1,anchor:'end',maxW:42,gradient:true,gradientStart:'#153d92',gradientEnd:'#2a66c9'}
      }
    },
    social: {
      mainLogo:{show:true,x:22.89,y:24.64,w:26,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
      countryFigure:{x:40.78,y:43.18,w:49.73,opacity:0.88},
      countryOverlay:{show:true,opacity:0.16,x:40.78,y:43.18,w:49.73},
      styles:{
        titleLines:{x:73.66,y:19.23,size:5.0,scale:1,anchor:'middle',maxW:28},
        country:{x:32.34,y:72.86,size:6.8,scale:1.2,anchor:'middle',maxW:42},
        footerTop:{x:8,y:88.6,size:3.0,scale:1,anchor:'start',maxW:58},
        footerBottom:{x:8,y:94,size:4.0,scale:1,anchor:'start',maxW:58},
        hashtag:{x:95,y:92.5,size:2.45,scale:1,anchor:'end',maxW:38}
      }
    }
  },
  player: {"landscape":{"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":14.75,"y":22.62,"w":18.5,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"playerCard":{"frameX":54,"frameY":6,"frameW":46,"frameH":80,"flagX":17.3,"flagY":56.78,"flagW":23.62,"flagH":13.66,"photoZoom":1.2,"photoOffsetX":18,"photoOffsetY":0.5},"styles":{"announcementLabel":{"x":5.92,"y":44.32,"size":5,"scale":1,"anchor":"start","maxW":32,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"player":{"x":6,"y":52,"size":7.4,"scale":1,"anchor":"start","maxW":38,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"country":{"x":6.93,"y":62.57,"size":4.6,"scale":1,"anchor":"start","maxW":20,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"footerLines":{"x":6,"y":84,"size":6,"scale":1,"anchor":"start","maxW":32,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50,"y":93.5,"size":3,"scale":1,"anchor":"middle","maxW":44,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"backgroundPreset":"playerBg1"},"square":{"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":14.5,"y":16,"w":23,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"playerCard":{"frameX":77.5,"frameY":48.5,"frameW":24.5,"frameH":47.5,"flagX":36.5,"flagY":58.5,"flagW":10.8,"flagH":5,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0},"styles":{"announcementLabel":{"x":7,"y":35,"size":4.6,"scale":1,"anchor":"start","maxW":38,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"player":{"x":7,"y":45,"size":6.8,"scale":1,"anchor":"start","maxW":40,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"country":{"x":7,"y":54,"size":4.4,"scale":1,"anchor":"start","maxW":22,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"footerLines":{"x":7,"y":79,"size":5.4,"scale":1,"anchor":"start","maxW":36,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50,"y":92,"size":2.8,"scale":1,"anchor":"middle","maxW":56,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"backgroundPreset":"playerBgSquare1"},"story":{"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50,"y":10.5,"w":28,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"playerCard":{"frameX":74.5,"frameY":51.5,"frameW":24.5,"frameH":43,"flagX":28.5,"flagY":54.5,"flagW":10,"flagH":4.2,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0},"styles":{"announcementLabel":{"x":50,"y":24,"size":3.6,"scale":1,"anchor":"middle","maxW":66,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"player":{"x":50,"y":31,"size":5.3,"scale":1,"anchor":"middle","maxW":72,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"country":{"x":50,"y":37,"size":3.6,"scale":1,"anchor":"middle","maxW":42,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"footerLines":{"x":50,"y":79,"size":4.8,"scale":1,"anchor":"middle","maxW":64,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50,"y":92.5,"size":2.4,"scale":1,"anchor":"middle","maxW":68,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"backgroundPreset":"playerBgStory1"},"social":{"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50,"y":11,"w":26,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"playerCard":{"frameX":75,"frameY":47.5,"frameW":24.5,"frameH":44.5,"flagX":29.5,"flagY":53.8,"flagW":10,"flagH":4.3,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0},"styles":{"announcementLabel":{"x":50,"y":22.5,"size":3.8,"scale":1,"anchor":"middle","maxW":66,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"player":{"x":50,"y":29.5,"size":6.1,"scale":1,"anchor":"middle","maxW":72,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"country":{"x":50,"y":36,"size":4,"scale":1,"anchor":"middle","maxW":46,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"footerLines":{"x":50,"y":81,"size":4.9,"scale":1,"anchor":"middle","maxW":68,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50,"y":94,"size":2.6,"scale":1,"anchor":"middle","maxW":68,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"backgroundPreset":"playerBgSquare1"},"poster":{"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50,"y":11.2,"w":25,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"playerCard":{"frameX":74,"frameY":50.5,"frameW":24,"frameH":41.5,"flagX":29,"flagY":53.5,"flagW":10,"flagH":4,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0},"styles":{"announcementLabel":{"x":50,"y":23,"size":3.9,"scale":1,"anchor":"middle","maxW":66,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"player":{"x":50,"y":30,"size":5.7,"scale":1,"anchor":"middle","maxW":72,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"country":{"x":50,"y":36,"size":3.9,"scale":1,"anchor":"middle","maxW":44,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"footerLines":{"x":50,"y":80,"size":4.7,"scale":1,"anchor":"middle","maxW":66,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50,"y":92.5,"size":2.5,"scale":1,"anchor":"middle","maxW":68,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"backgroundPreset":"playerBgStory1"}},
  bio: {
    landscape: { mainLogo:{show:true,outline:false,outlineWidth:0,outlineColor:'#ffffff'} },
    square: { mainLogo:{show:true,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ player:{x:8,y:34,maxW:38}, country:{x:8,y:41,maxW:30}, sectionLabel:{x:8,y:57,maxW:34}, bioText:{x:8,y:62,maxW:38}, footerLines:{x:8,y:90,maxW:38}, hashtag:{x:92,y:95,maxW:26} } },
    story: { mainLogo:{show:true,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ player:{x:8,y:44,maxW:54}, country:{x:8,y:49,maxW:42}, sectionLabel:{x:8,y:57,maxW:36}, bioText:{x:8,y:61,maxW:42}, footerLines:{x:8,y:88,maxW:42}, hashtag:{x:92,y:95,maxW:36} } },
    poster: { mainLogo:{show:true,outline:false,outlineWidth:0,outlineColor:'#ffffff'} },
    social: { mainLogo:{show:true,outline:false,outlineWidth:0,outlineColor:'#ffffff'}, styles:{ player:{x:8,y:39,maxW:36}, country:{x:8,y:45,maxW:28}, sectionLabel:{x:8,y:58,maxW:32}, bioText:{x:8,y:62,maxW:36}, footerLines:{x:8,y:89,maxW:36}, hashtag:{x:92,y:95,maxW:28} } }
  }
};

const USER_DEFAULT_FORMAT_STATES = {"master":{"landscape":{"format":"landscape","backgroundPreset":"officialCoverAltLogoCourt","headline":"THE WORLD COMES TO ROMANIA","hostedText":"ORGANIZAT DE FEDERAȚIA ROMÂNĂ DE PADBOL","hashtag":"#RomaniaWelcomesTheWorld","agencySupportText":"","styles":{"headline":{"x":50.17,"y":86.08,"size":6.7,"scale":1,"anchor":"middle","maxW":72,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hostedText":{"x":51.02,"y":91.21,"size":2.8,"scale":1,"anchor":"middle","maxW":66,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":61.86,"y":95.75,"size":2.7,"scale":1.16,"anchor":"end","maxW":36,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"agencySupportText":{"x":50,"y":97.4,"size":1.6,"scale":1,"anchor":"middle","maxW":52,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50.94,"y":23.45,"w":27,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":true,"x":8.55,"y":87.86,"w":10.53,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency3","useCustom":false,"show":true,"x":88.46,"y":89.49,"w":17.52,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":60,"frameY":17,"frameW":32,"frameH":62,"flagX":28,"flagY":57.5,"flagW":10,"flagH":5,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0},"bioPhoto":{"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}},"square":{"format":"square","backgroundPreset":"bgAlt1","headline":"THE WORLD COMES TO ROMANIA","hostedText":"ORGANIZAT DE FEDERAȚIA ROMÂNĂ DE PADBOL","hashtag":"#RomaniaWelcomesTheWorld","agencySupportText":"","styles":{"headline":{"x":49.32,"y":82.59,"size":6,"scale":1,"anchor":"middle","maxW":80,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hostedText":{"x":50,"y":89,"size":2.6,"scale":1,"anchor":"middle","maxW":72,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50,"y":95,"size":2.5,"scale":1,"anchor":"middle","maxW":74,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"agencySupportText":{"x":50,"y":97.4,"size":1.5,"scale":1,"anchor":"middle","maxW":60,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50.09,"y":19.45,"w":32,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":true,"x":11.19,"y":10.82,"w":15.63,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency3","useCustom":false,"show":true,"x":85.49,"y":9.24,"w":24.57,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":61,"frameY":20,"frameW":31,"frameH":43,"flagX":29,"flagY":54,"flagW":15,"flagH":6,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0},"bioPhoto":{"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}},"story":{"format":"story","backgroundPreset":"bgAlt2","headline":"THE WORLD COMES TO ROMANIA","hostedText":"ORGANIZAT DE FEDERAȚIA ROMÂNĂ DE PADBOL","hashtag":"#RomaniaWelcomesTheWorld","agencySupportText":"","styles":{"headline":{"x":51.11,"y":86.07,"size":4.7,"scale":0.84,"anchor":"middle","maxW":84,"outline":true,"outlineWidth":1.2,"outlineColor":"#000000","shadow":true,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hostedText":{"x":49.49,"y":89.53,"size":2.2,"scale":0.84,"anchor":"middle","maxW":76,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":true,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50,"y":93,"size":2.1,"scale":1,"anchor":"middle","maxW":80,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"agencySupportText":{"x":50,"y":96.3,"size":1.4,"scale":1,"anchor":"middle","maxW":72,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50,"y":16,"w":40,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":10,"y":12,"w":11.5,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":90,"y":10,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":16,"frameY":42,"frameW":69,"frameH":31,"flagX":30,"flagY":41,"flagW":18,"flagH":3.8,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0},"bioPhoto":{"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}},"social":{"format":"social","backgroundPreset":"bgAlt5","headline":"THE WORLD COMES TO ROMANIA","hostedText":"ORGANIZAT DE FEDERAȚIA ROMÂNĂ DE PADBOL","hashtag":"#RomaniaWelcomesTheWorld","agencySupportText":"","styles":{"headline":{"x":50,"y":81,"size":5.4,"scale":1,"anchor":"middle","maxW":82,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hostedText":{"x":50,"y":88,"size":2.5,"scale":1,"anchor":"middle","maxW":74,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50,"y":94.5,"size":2.3,"scale":1,"anchor":"middle","maxW":76,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"agencySupportText":{"x":50,"y":97,"size":1.4,"scale":1,"anchor":"middle","maxW":68,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50,"y":19,"w":31,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":10,"y":12,"w":13,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":90,"y":10,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":18,"frameY":41,"frameW":64,"frameH":33,"flagX":33,"flagY":40.5,"flagW":16,"flagH":4.8,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}},"poster":{"format":"poster","backgroundPreset":"bgAlt4","headline":"THE WORLD COMES TO ROMANIA","hostedText":"ORGANIZAT DE FEDERAȚIA ROMÂNĂ DE PADBOL","hashtag":"#RomaniaWelcomesTheWorld","agencySupportText":"","styles":{"headline":{"x":50,"y":80.5,"size":5,"scale":1,"anchor":"middle","maxW":84,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hostedText":{"x":50,"y":87,"size":2.3,"scale":1,"anchor":"middle","maxW":76,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50,"y":93.5,"size":2.1,"scale":1,"anchor":"middle","maxW":80,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"agencySupportText":{"x":50,"y":96.6,"size":1.4,"scale":1,"anchor":"middle","maxW":74,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50,"y":18,"w":31,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":10,"y":12,"w":13,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":90,"y":10,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":17,"frameY":40,"frameW":66,"frameH":31,"flagX":34,"flagY":40.2,"flagW":16,"flagH":4.4,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}}},"welcome":{"landscape":{"format":"landscape","backgroundPreset":"welcomeEventBgLandscape","titleLines":"PADBOL WORLD CUP\nROMANIA 2026","venue":"ROMANIA 2026","date":"OFFICIAL EVENT","website":"#RomaniaWelcomesTheWorld","styles":{"titleLines":{"x":50.26,"y":40.59,"size":7.8,"scale":1,"anchor":"middle","maxW":74,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"venue":{"x":50,"y":62,"size":5,"scale":1,"anchor":"middle","maxW":48,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"date":{"x":49.32,"y":73.81,"size":4.8,"scale":1,"anchor":"middle","maxW":52,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"website":{"x":50,"y":90,"size":2.3,"scale":1,"anchor":"middle","maxW":60,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50.51,"y":17.89,"w":20,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":25,"y":95,"w":9,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":58,"y":95,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":60,"frameY":17,"frameW":32,"frameH":62,"flagX":28,"flagY":57.5,"flagW":10,"flagH":5,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0},"bioPhoto":{"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}},"square":{"format":"square","backgroundPreset":"welcomeEventBgSquare","titleLines":"PADBOL WORLD CUP\nROMANIA 2026","venue":"ROMANIA 2026","date":"OFFICIAL EVENT","website":"#RomaniaWelcomesTheWorld","styles":{"titleLines":{"x":50.17,"y":39.18,"size":7,"scale":1,"anchor":"middle","maxW":82,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"venue":{"x":49.75,"y":58.28,"size":4.8,"scale":1,"anchor":"middle","maxW":64,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"date":{"x":49.91,"y":70.82,"size":4.4,"scale":1.15,"anchor":"middle","maxW":68,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"website":{"x":50,"y":90,"size":2.3,"scale":1,"anchor":"middle","maxW":74,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50.51,"y":19.89,"w":33.86,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":25,"y":95,"w":9,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":58,"y":95,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":61,"frameY":20,"frameW":31,"frameH":43,"flagX":29,"flagY":54,"flagW":15,"flagH":6,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0},"bioPhoto":{"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}},"story":{"format":"story","backgroundPreset":"welcomeEventBgStory","titleLines":"PADBOL WORLD CUP\nROMANIA 2026","venue":"ROMANIA 2026","date":"OFFICIAL EVENT","website":"#RomaniaWelcomesTheWorld","styles":{"titleLines":{"x":50,"y":31,"size":5.5,"scale":1,"anchor":"middle","maxW":82,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"venue":{"x":50,"y":57,"size":4.2,"scale":1,"anchor":"middle","maxW":74,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"date":{"x":50.76,"y":66.29,"size":4,"scale":1,"anchor":"middle","maxW":78,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"website":{"x":50,"y":92,"size":2,"scale":1,"anchor":"middle","maxW":84,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50.08,"y":10.26,"w":30,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":25,"y":95,"w":9,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":58,"y":95,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":16,"frameY":42,"frameW":69,"frameH":31,"flagX":30,"flagY":41,"flagW":18,"flagH":3.8,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0},"bioPhoto":{"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}},"social":{"format":"social","backgroundPreset":"welcomeEventBgSocial","titleLines":"PADBOL WORLD CUP\nROMANIA 2026","venue":"ROMANIA 2026","date":"OFFICIAL EVENT","website":"#RomaniaWelcomesTheWorld","styles":{"titleLines":{"x":50.17,"y":34.83,"size":6.6,"scale":1,"anchor":"middle","maxW":78,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"venue":{"x":50,"y":61,"size":4.5,"scale":1,"anchor":"middle","maxW":62,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"date":{"x":50,"y":70,"size":4.2,"scale":1,"anchor":"middle","maxW":66,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"website":{"x":50,"y":89,"size":2.2,"scale":1,"anchor":"middle","maxW":72,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":49.83,"y":13.1,"w":36.24,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":25,"y":95,"w":9,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":58,"y":95,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":18,"frameY":41,"frameW":64,"frameH":33,"flagX":33,"flagY":40.5,"flagW":16,"flagH":4.8,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0},"bioPhoto":{"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}},"poster":{"format":"poster","backgroundPreset":"welcomeEventBgPoster","titleLines":"PADBOL WORLD CUP\nROMANIA 2026","venue":"ROMANIA 2026","date":"OFFICIAL EVENT","website":"#RomaniaWelcomesTheWorld","styles":{"titleLines":{"x":50,"y":31,"size":5.8,"scale":1,"anchor":"middle","maxW":82,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"venue":{"x":50,"y":58,"size":4.4,"scale":1,"anchor":"middle","maxW":72,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"date":{"x":50,"y":67,"size":4.2,"scale":1,"anchor":"middle","maxW":74,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"website":{"x":50,"y":92,"size":2,"scale":1,"anchor":"middle","maxW":82,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":50,"y":10.5,"w":28,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":25,"y":95,"w":9,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":58,"y":95,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":17,"frameY":40,"frameW":66,"frameH":31,"flagX":34,"flagY":40.2,"flagW":16,"flagH":4.4,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0},"bioPhoto":{"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}}}};

function applyUserDefaultFormatStates(){
  if(!USER_DEFAULT_FORMAT_STATES) return;
  Object.keys(USER_DEFAULT_FORMAT_STATES).forEach(template=>{
    const states = USER_DEFAULT_FORMAT_STATES[template] || {};
    const baseFmt = states.landscape ? 'landscape' : Object.keys(states)[0];
    if(baseFmt && states[baseFmt]) TEMPLATE_DEFAULTS[template] = clone(states[baseFmt]);
    if(!RESPONSIVE_PRESETS[template]) RESPONSIVE_PRESETS[template] = {};
    Object.keys(states).forEach(fmt=>{ RESPONSIVE_PRESETS[template][fmt] = clone(states[fmt]); });
  });
}
applyUserDefaultFormatStates();

// User supplied default: Country Confirmed preset
(function(){
  const countryLandscape = {
    format:'landscape',
    backgroundPreset:'countryBgMain',
    titleLines:'TEAM\nCONFIRMED',
    country:'[COUNTRY NAME]',
    footerTop:'PADBOL WORLD CUP ROMANIA 2026',
    footerBottom:'SEE YOU IN ROMANIA',
    hashtag:'#RomaniaWelcomesTheWorld',
    styles:{
      titleLines:{x:14.99,y:46.44,size:6.2,scale:1.29,anchor:'middle',maxW:24,gradient:true,gradientStart:'#b78723',gradientEnd:'#f7dd8b',outline:true,outlineWidth:1.3,outlineColor:'#1d1203',shadow:true,shadowDx:.65,shadowDy:.85,shadowBlur:1.7,shadowColor:'#0c0b10'},
      country:{x:68.5,y:76.3,size:8.8,scale:1,anchor:'middle',maxW:54,outline:true,outlineWidth:2.6,outlineColor:'#b78628',shadow:true,shadowDx:.7,shadowDy:.9,shadowBlur:1.9,shadowColor:'#0c0b10'},
      footerTop:{x:4.8,y:89.56,size:4,scale:1,anchor:'start',maxW:48,gradient:false},
      footerBottom:{x:4.8,y:95.5,size:4.8,scale:1,anchor:'start',maxW:42,outline:false},
      hashtag:{x:95.5,y:92.2,size:3,scale:1,anchor:'end',maxW:34,gradient:true,gradientStart:'#b78723',gradientEnd:'#f7dd8b',shadow:true,shadowDx:.5,shadowDy:.6,shadowBlur:1.2,shadowColor:'#051127'}
    },
    mainLogo:{preset:'logo1',useCustom:false,show:true,x:15.14,y:21.27,w:26.69,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
    countryOverlay:{show:true,opacity:.16,x:63.93,y:37.55,w:24.54},
    countryFigure:{show:true,preset:'countryFigure1',x:63.93,y:37.55,w:24.54,opacity:.88},
    frp:{preset:'frp1',useCustom:false,show:false,x:12,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
    agency:{preset:'agency1',useCustom:false,show:false,x:90,y:10,w:12,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
    customTexts:[]
  };

  TEMPLATE_DEFAULTS.country = clone(countryLandscape);

  if (!RESPONSIVE_PRESETS.country) RESPONSIVE_PRESETS.country = {};
  RESPONSIVE_PRESETS.country.landscape = clone(countryLandscape);

  RESPONSIVE_PRESETS.country.square = deepMerge(clone(countryLandscape), {
    format:'square',
    styles:{
      titleLines:{x:50,y:42.5,size:5.4,scale:1,maxW:42},
      country:{x:50,y:79,size:7.7,scale:1.1,maxW:72},
      footerTop:{x:7.5,y:90.8,size:3,maxW:58},
      footerBottom:{x:50,y:85.6,size:4,anchor:'middle',maxW:66},
      hashtag:{x:95,y:95.2,size:2.35,maxW:38}
    },
    mainLogo:{x:50.72,y:13.94,w:25.12},
    countryOverlay:{x:34,y:61,w:34},
    countryFigure:{x:34,y:61,w:34}
  });

  RESPONSIVE_PRESETS.country.story = deepMerge(clone(countryLandscape), {
    format:'story',
    styles:{
      titleLines:{x:50.23,y:19.38,size:4.2,scale:.86,maxW:42,outlineWidth:1.2},
      country:{x:4.01,y:84.43,size:6.2,scale:1.38,anchor:'start',maxW:92,outlineWidth:1.6,outlineColor:'#ffffff',gradient:true,gradientStart:'#153d92',gradientEnd:'#2a66c9',shadowColor:'#102246'},
      footerTop:{x:4.4,y:90.6,size:2.55,maxW:74},
      footerBottom:{x:4.4,y:95,size:3.35,maxW:78},
      hashtag:{x:95,y:96.3,size:2.15,maxW:42,gradientStart:'#153d92',gradientEnd:'#2a66c9'}
    },
    mainLogo:{x:50,y:13.2,w:31.5},
    countryOverlay:{x:40.78,y:43.18,w:49.73},
    countryFigure:{x:40.78,y:43.18,w:49.73}
  });

  RESPONSIVE_PRESETS.country.social = deepMerge(clone(countryLandscape), {
    format:'social',
    styles:{
      titleLines:{x:73.66,y:19.23,size:5,scale:1,maxW:28},
      country:{x:32.34,y:72.86,size:6.8,scale:1.2,maxW:42},
      footerTop:{x:8,y:88.6,size:3,maxW:58},
      footerBottom:{x:8,y:94,size:4,maxW:58},
      hashtag:{x:95,y:92.5,size:2.45,maxW:38}
    },
    mainLogo:{x:22.89,y:24.64,w:26},
    countryOverlay:{x:40.78,y:43.18,w:49.73},
    countryFigure:{x:40.78,y:43.18,w:49.73}
  });

  RESPONSIVE_PRESETS.country.poster = deepMerge(clone(countryLandscape), {
    format:'poster',
    styles:{
      titleLines:{x:50,y:20.8,size:4,scale:.9,maxW:42,outlineWidth:1.2},
      country:{x:4.2,y:84.2,size:6.5,scale:1.24,anchor:'start',maxW:90,outlineWidth:1.5,outlineColor:'#ffffff',gradient:true,gradientStart:'#153d92',gradientEnd:'#2a66c9',shadowColor:'#102246'},
      footerTop:{x:4.8,y:90.3,size:2.55,maxW:72},
      footerBottom:{x:4.8,y:94.8,size:3.35,maxW:78},
      hashtag:{x:95,y:96,size:2.05,maxW:42,gradientStart:'#153d92',gradientEnd:'#2a66c9'}
    },
    mainLogo:{x:50,y:12.8,w:28.2},
    countryOverlay:{x:39.5,y:43.8,w:48},
    countryFigure:{x:39.5,y:43.8,w:48}
  });
})();


// User supplied default: Official Poster preset
(function(){
  const officialPosterPreset = {"format":"poster","backgroundPreset":"officialPosterBg","welcomeLine":"WELCOME TO","titleLines":"PADBOL\nWORLD CUP\nROMANIA 2026","subLine":"ROMANIA 2026","venue":"SALA POLIVALENTĂ BUCUREȘTI","date":"30 SEPTEMBRIE – 3 OCTOMBRIE 2026","website":"WWW.FRPADBOL.RO","hashtag":"#RomaniaWelcomesTheWorld","hostedText":"ORGANIZAT DE FEDERAȚIA ROMÂNĂ DE PADBOL","styles":{"welcomeLine":{"x":50.76,"y":32.13,"size":4,"scale":1.25,"anchor":"middle","maxW":74,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"titleLines":{"x":50.18,"y":42.35,"size":7.6,"scale":0.98,"anchor":"middle","maxW":78,"gradient":true,"gradientStart":"#b78723","gradientEnd":"#f7dd8b","outline":true,"outlineWidth":1.4,"outlineColor":"#163878","shadow":true,"shadowDx":4.8,"shadowDy":6,"shadowBlur":4.8,"shadowColor":"#15305f","fontFamily":"Tahoma, Verdana, sans-serif","fontWeight":900,"italic":false},"subLine":{"x":50.25,"y":67.22,"size":4.6,"scale":0.75,"anchor":"middle","maxW":58,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"venue":{"x":50,"y":75.5,"size":3.3,"scale":1,"anchor":"middle","maxW":58,"gradient":true,"gradientStart":"#b78723","gradientEnd":"#f7dd8b","fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false},"date":{"x":50,"y":80,"size":3.3,"scale":1,"anchor":"middle","maxW":52,"gradient":true,"gradientStart":"#b78723","gradientEnd":"#f7dd8b","fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false},"website":{"x":50.17,"y":85.95,"size":2.3,"scale":0.6,"anchor":"middle","maxW":62,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":50.34,"y":88.76,"size":2,"scale":0.96,"anchor":"middle","maxW":72,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hostedText":{"x":50.84,"y":91.66,"size":1.8,"scale":0.68,"anchor":"middle","maxW":80,"fontFamily":"Arial Black, Arial, sans-serif","fontWeight":900,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"officialPosterLogo","useCustom":false,"show":true,"x":50,"y":15.3,"w":34,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":25,"y":95,"w":9,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":58,"y":95,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"customTexts":[],"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":17,"frameY":40,"frameW":66,"frameH":31,"flagX":34,"flagY":40.2,"flagW":16,"flagH":4.4,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0},"bioPhoto":{"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"boxOffsetX":0,"boxOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}};
  if(!RESPONSIVE_PRESETS.officialPoster) RESPONSIVE_PRESETS.officialPoster = {};
  RESPONSIVE_PRESETS.officialPoster.poster = clone(officialPosterPreset);
  TEMPLATE_DEFAULTS.officialPoster = clone(officialPosterPreset);
})();

// User supplied default: Player Profile landscape preset (2026-06-11).
(function(){
  const bioLandscapePreset = {"format":"landscape","player":"[PLAYER NAME]","country":"[COUNTRY]","bioText":"Write the player description and palmares here.","sectionLabel":"PALMARES / PROFILE","footerLines":"PADBOL WORLD CUP\nROMANIA 2026","hashtag":"#RomaniaWelcomesTheWorld","styles":{"player":{"x":27,"y":38,"size":4.8,"scale":1,"anchor":"middle","maxW":34,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"country":{"x":27,"y":45,"size":3.8,"scale":1,"anchor":"middle","maxW":34,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"sectionLabel":{"x":27,"y":61,"size":2.4,"scale":1,"anchor":"middle","maxW":34,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"bioText":{"x":27,"y":66,"size":2.3,"scale":1,"anchor":"middle","maxW":34,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"footerLines":{"x":20,"y":90,"size":4.2,"scale":1,"anchor":"middle","maxW":34,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"},"hashtag":{"x":75,"y":95,"size":2.4,"scale":1,"anchor":"middle","maxW":34,"outline":false,"outlineWidth":1.2,"outlineColor":"#000000","shadow":false,"shadowDx":0.5,"shadowDy":0.5,"shadowBlur":1.5,"shadowColor":"#000000","fontFamily":"Impact, Haettenschweiler, Arial Black, sans-serif","fontWeight":900,"italic":false,"gradient":false,"gradientStart":"#ffffff","gradientEnd":"#ffffff"}},"mainLogo":{"preset":"logo1","useCustom":false,"show":true,"x":27,"y":14,"w":20,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"frp":{"preset":"frp1","useCustom":false,"show":false,"x":10,"y":10,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"agency":{"preset":"agency1","useCustom":false,"show":false,"x":90,"y":10,"w":12,"outline":false,"outlineWidth":0,"outlineColor":"#ffffff"},"extraAsset1":{"show":false,"x":50,"y":50,"w":16},"extraAsset2":{"show":false,"x":50,"y":58,"w":16},"playerCard":{"frameX":60,"frameY":17,"frameW":32,"frameH":62,"flagX":27,"flagY":57.5,"flagW":10,"flagH":5,"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"frameScale":1,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0},"bioPhoto":{"photoZoom":1,"photoOffsetX":0,"photoOffsetY":0,"boxOffsetX":0,"boxOffsetY":0,"frameScale":1.18,"photoScaleX":1,"photoScaleY":1,"cropLeft":0,"cropRight":0,"cropTop":0,"cropBottom":0}};
  if(!RESPONSIVE_PRESETS.bio) RESPONSIVE_PRESETS.bio = {};
  RESPONSIVE_PRESETS.bio.landscape = clone(bioLandscapePreset);
  // also make reset/open default use this landscape positioning
  TEMPLATE_DEFAULTS.bio = clone(bioLandscapePreset);
})();



// User supplied Player Profile defaults from uploaded presets (landscape + 1:1), with numeric controls support.
(function(){
  const bioStates = {"landscape": {"format": "landscape", "player": "[PLAYER NAME]", "country": "[COUNTRY]", "bioText": "Write the player description and palmares here.", "sectionLabel": "PALMARES / PROFILE", "footerLines": "PADBOL WORLD CUP\nROMANIA 2026", "hashtag": "#RomaniaWelcomesTheWorld", "styles": {"player": {"x": 26.66, "y": 38, "size": 4.8, "scale": 1, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "country": {"x": 26.49, "y": 45, "size": 3.8, "scale": 1, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "sectionLabel": {"x": 26.58, "y": 61.6, "size": 2.4, "scale": 1, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "bioText": {"x": 27, "y": 66, "size": 2.3, "scale": 1, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "footerLines": {"x": 28.23, "y": 87.43, "size": 4.2, "scale": 1.75, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "hashtag": {"x": 75.08, "y": 85.33, "size": 2.4, "scale": 1.88, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": true, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}}, "mainLogo": {"preset": "logo1", "useCustom": false, "show": true, "x": 27, "y": 14, "w": 20, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "frp": {"preset": "frp1", "useCustom": false, "show": false, "x": 10, "y": 10, "w": 12, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "agency": {"preset": "agency1", "useCustom": false, "show": false, "x": 90, "y": 10, "w": 12, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "extraAsset1": {"show": false, "x": 50, "y": 50, "w": 16}, "extraAsset2": {"show": false, "x": 50, "y": 58, "w": 16}, "playerCard": {"frameX": 60, "frameY": 17, "frameW": 32, "frameH": 62, "flagX": 26.74, "flagY": 52.81, "flagW": 10, "flagH": 5, "photoZoom": 1, "photoOffsetX": 0, "photoOffsetY": 0, "frameScale": 1, "photoScaleX": 1, "photoScaleY": 1, "cropLeft": 0, "cropRight": 0, "cropTop": 0, "cropBottom": 0}, "bioPhoto": {"photoZoom": 1, "photoOffsetX": 0, "photoOffsetY": 0, "boxOffsetX": 1, "boxOffsetY": 8, "frameScale": 1.44, "photoScaleX": 1, "photoScaleY": 1, "cropLeft": 0, "cropRight": 0, "cropTop": 0, "cropBottom": 0}, "bioInfo": {"boxOffsetX": 2, "boxOffsetY": 0}}, "square": {"format": "square", "player": "[PLAYER NAME]", "country": "[COUNTRY]", "bioText": "Write the player description and palmares here.", "sectionLabel": "PALMARES / PROFILE", "footerLines": "PADBOL WORLD CUP\nROMANIA 2026", "hashtag": "#RomaniaWelcomesTheWorld", "styles": {"player": {"x": 26.84, "y": 29.85, "size": 4.8, "scale": 1, "anchor": "middle", "maxW": 38, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "country": {"x": 26.08, "y": 36.83, "size": 3.8, "scale": 1, "anchor": "middle", "maxW": 30, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "sectionLabel": {"x": 26.34, "y": 53.94, "size": 2.4, "scale": 1.3, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "bioText": {"x": 25.74, "y": 58.35, "size": 2.3, "scale": 1, "anchor": "middle", "maxW": 38, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "footerLines": {"x": 25.92, "y": 84.99, "size": 4.2, "scale": 1, "anchor": "middle", "maxW": 38, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "hashtag": {"x": 74.5, "y": 88.54, "size": 2.4, "scale": 1.79, "anchor": "middle", "maxW": 26, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": true, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}}, "mainLogo": {"preset": "logo1", "useCustom": false, "show": true, "x": 27, "y": 14, "w": 20, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "frp": {"preset": "frp1", "useCustom": false, "show": false, "x": 10, "y": 10, "w": 12, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "agency": {"preset": "agency1", "useCustom": false, "show": false, "x": 90, "y": 10, "w": 12, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "extraAsset1": {"show": false, "x": 50, "y": 50, "w": 16}, "extraAsset2": {"show": false, "x": 50, "y": 58, "w": 16}, "playerCard": {"frameX": 60, "frameY": 17, "frameW": 32, "frameH": 62, "flagX": 26.24, "flagY": 44.78, "flagW": 10, "flagH": 5, "photoZoom": 1, "photoOffsetX": 0, "photoOffsetY": 0, "frameScale": 1, "photoScaleX": 1, "photoScaleY": 1, "cropLeft": 0, "cropRight": 0, "cropTop": 0, "cropBottom": 0}, "bioPhoto": {"photoZoom": 1, "photoOffsetX": 0, "photoOffsetY": 0, "boxOffsetX": 1, "boxOffsetY": 12.5, "frameScale": 1.67, "photoScaleX": 1, "photoScaleY": 1, "cropLeft": 0, "cropRight": 0, "cropTop": 0, "cropBottom": 0}, "bioInfo": {"boxOffsetX": 0, "boxOffsetY": 0}}, "story": {"format": "story", "player": "[PLAYER NAME]", "country": "[COUNTRY]", "bioText": "Write the player description and palmares here.", "sectionLabel": "PALMARES / PROFILE", "footerLines": "PADBOL WORLD CUP\nROMANIA 2026", "hashtag": "#RomaniaWelcomesTheWorld", "styles": {"player": {"x": 26.84, "y": 29.85, "size": 4.8, "scale": 1, "anchor": "middle", "maxW": 38, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "country": {"x": 26.08, "y": 36.83, "size": 3.8, "scale": 1, "anchor": "middle", "maxW": 30, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "sectionLabel": {"x": 26.34, "y": 53.94, "size": 2.4, "scale": 1.3, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "bioText": {"x": 25.74, "y": 58.35, "size": 2.3, "scale": 1, "anchor": "middle", "maxW": 38, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "footerLines": {"x": 25.92, "y": 84.99, "size": 4.2, "scale": 1, "anchor": "middle", "maxW": 38, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "hashtag": {"x": 74.5, "y": 88.54, "size": 2.4, "scale": 1.79, "anchor": "middle", "maxW": 26, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": true, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}}, "mainLogo": {"preset": "logo1", "useCustom": false, "show": true, "x": 27, "y": 14, "w": 20, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "frp": {"preset": "frp1", "useCustom": false, "show": false, "x": 10, "y": 10, "w": 12, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "agency": {"preset": "agency1", "useCustom": false, "show": false, "x": 90, "y": 10, "w": 12, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "extraAsset1": {"show": false, "x": 50, "y": 50, "w": 16}, "extraAsset2": {"show": false, "x": 50, "y": 58, "w": 16}, "playerCard": {"frameX": 60, "frameY": 17, "frameW": 32, "frameH": 62, "flagX": 26.24, "flagY": 44.78, "flagW": 10, "flagH": 5, "photoZoom": 1, "photoOffsetX": 0, "photoOffsetY": 0, "frameScale": 1, "photoScaleX": 1, "photoScaleY": 1, "cropLeft": 0, "cropRight": 0, "cropTop": 0, "cropBottom": 0}, "bioPhoto": {"photoZoom": 1, "photoOffsetX": 0, "photoOffsetY": 0, "boxOffsetX": 1, "boxOffsetY": 8, "frameScale": 1.25, "photoScaleX": 1, "photoScaleY": 1, "cropLeft": 0, "cropRight": 0, "cropTop": 0, "cropBottom": 0}, "bioInfo": {"boxOffsetX": 0, "boxOffsetY": 0}}, "social": {"format": "social", "player": "[PLAYER NAME]", "country": "[COUNTRY]", "bioText": "Write the player description and palmares here.", "sectionLabel": "PALMARES / PROFILE", "footerLines": "PADBOL WORLD CUP\nROMANIA 2026", "hashtag": "#RomaniaWelcomesTheWorld", "styles": {"player": {"x": 26.84, "y": 29.85, "size": 4.8, "scale": 1, "anchor": "middle", "maxW": 38, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "country": {"x": 26.08, "y": 36.83, "size": 3.8, "scale": 1, "anchor": "middle", "maxW": 30, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "sectionLabel": {"x": 26.34, "y": 53.94, "size": 2.4, "scale": 1.3, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "bioText": {"x": 25.74, "y": 58.35, "size": 2.3, "scale": 1, "anchor": "middle", "maxW": 38, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "footerLines": {"x": 25.92, "y": 84.99, "size": 4.2, "scale": 1, "anchor": "middle", "maxW": 38, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "hashtag": {"x": 74.5, "y": 88.54, "size": 2.4, "scale": 1.79, "anchor": "middle", "maxW": 26, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": true, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}}, "mainLogo": {"preset": "logo1", "useCustom": false, "show": true, "x": 27, "y": 14, "w": 20, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "frp": {"preset": "frp1", "useCustom": false, "show": false, "x": 10, "y": 10, "w": 12, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "agency": {"preset": "agency1", "useCustom": false, "show": false, "x": 90, "y": 10, "w": 12, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "extraAsset1": {"show": false, "x": 50, "y": 50, "w": 16}, "extraAsset2": {"show": false, "x": 50, "y": 58, "w": 16}, "playerCard": {"frameX": 60, "frameY": 17, "frameW": 32, "frameH": 62, "flagX": 26.24, "flagY": 44.78, "flagW": 10, "flagH": 5, "photoZoom": 1, "photoOffsetX": 0, "photoOffsetY": 0, "frameScale": 1, "photoScaleX": 1, "photoScaleY": 1, "cropLeft": 0, "cropRight": 0, "cropTop": 0, "cropBottom": 0}, "bioPhoto": {"photoZoom": 1, "photoOffsetX": 0, "photoOffsetY": 0, "boxOffsetX": 1, "boxOffsetY": 8, "frameScale": 1.3, "photoScaleX": 1, "photoScaleY": 1, "cropLeft": 0, "cropRight": 0, "cropTop": 0, "cropBottom": 0}, "bioInfo": {"boxOffsetX": 0, "boxOffsetY": 0}}, "poster": {"format": "poster", "player": "[PLAYER NAME]", "country": "[COUNTRY]", "bioText": "Write the player description and palmares here.", "sectionLabel": "PALMARES / PROFILE", "footerLines": "PADBOL WORLD CUP\nROMANIA 2026", "hashtag": "#RomaniaWelcomesTheWorld", "styles": {"player": {"x": 26.66, "y": 38, "size": 4.8, "scale": 1, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "country": {"x": 26.49, "y": 45, "size": 3.8, "scale": 1, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "sectionLabel": {"x": 26.58, "y": 61.6, "size": 2.4, "scale": 1, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "bioText": {"x": 27, "y": 66, "size": 2.3, "scale": 1, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "footerLines": {"x": 28.23, "y": 87.43, "size": 4.2, "scale": 1.75, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": false, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}, "hashtag": {"x": 75.08, "y": 85.33, "size": 2.4, "scale": 1.88, "anchor": "middle", "maxW": 34, "outline": false, "outlineWidth": 1.2, "outlineColor": "#000000", "shadow": false, "shadowDx": 0.5, "shadowDy": 0.5, "shadowBlur": 1.5, "shadowColor": "#000000", "fontFamily": "Impact, Haettenschweiler, Arial Black, sans-serif", "fontWeight": 900, "italic": false, "gradient": true, "gradientStart": "#ffffff", "gradientEnd": "#ffffff"}}, "mainLogo": {"preset": "logo1", "useCustom": false, "show": true, "x": 27, "y": 14, "w": 20, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "frp": {"preset": "frp1", "useCustom": false, "show": false, "x": 10, "y": 10, "w": 12, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "agency": {"preset": "agency1", "useCustom": false, "show": false, "x": 90, "y": 10, "w": 12, "outline": false, "outlineWidth": 0, "outlineColor": "#ffffff"}, "extraAsset1": {"show": false, "x": 50, "y": 50, "w": 16}, "extraAsset2": {"show": false, "x": 50, "y": 58, "w": 16}, "playerCard": {"frameX": 60, "frameY": 17, "frameW": 32, "frameH": 62, "flagX": 26.74, "flagY": 52.81, "flagW": 10, "flagH": 5, "photoZoom": 1, "photoOffsetX": 0, "photoOffsetY": 0, "frameScale": 1, "photoScaleX": 1, "photoScaleY": 1, "cropLeft": 0, "cropRight": 0, "cropTop": 0, "cropBottom": 0}, "bioPhoto": {"photoZoom": 1, "photoOffsetX": 0, "photoOffsetY": 0, "boxOffsetX": 1, "boxOffsetY": 8, "frameScale": 1.35, "photoScaleX": 1, "photoScaleY": 1, "cropLeft": 0, "cropRight": 0, "cropTop": 0, "cropBottom": 0}, "bioInfo": {"boxOffsetX": 2, "boxOffsetY": 0}}};
  if(!RESPONSIVE_PRESETS.bio) RESPONSIVE_PRESETS.bio = {};
  Object.keys(bioStates).forEach(fmt=>{ RESPONSIVE_PRESETS.bio[fmt] = clone(bioStates[fmt]); });
  TEMPLATE_DEFAULTS.bio = clone(bioStates.landscape);
})();

function ensureTemplateMemory(template){
  if(!templateFormatMemory[template]) templateFormatMemory[template] = {};
  return templateFormatMemory[template];
}
function normalizedFormat(format){
  return FORMAT_KEYS.includes(format) ? format : 'landscape';
}
function rememberCurrentFormatState(){
  if(!currentTemplate || !state || !state.format) return;
  ensureStyleDefaults();
  ensureExtraAssets();
  ensurePlayerEditableBoxes();
  const store = ensureTemplateMemory(currentTemplate);
  store[normalizedFormat(state.format)] = clone(state);
}
function makeDefaultStateForTemplateFormat(template, format){
  const prevTemplate = currentTemplate;
  const prevState = clone(state || {});
  const prevSelected = selectedKey;
  const prevInteraction = interaction;
  currentTemplate = template;
  state = clone(TEMPLATE_DEFAULTS[template]);
  state.format = normalizedFormat(format || state.format);
  ensureStyleDefaults();
  ensureExtraAssets();
  if(currentTemplate==='master' && !state.backgroundPreset) state.backgroundPreset=recommendedMasterBg(state.format || 'landscape');
  if(currentTemplate==='officialPoster' && !state.backgroundPreset) state.backgroundPreset=recommendedOfficialPosterBg(state.format || 'poster');
  if(currentTemplate==='welcome' && !state.backgroundPreset) state.backgroundPreset=recommendedWelcomeBg(state.format || 'landscape');
  if(currentTemplate==='country' && !state.backgroundPreset) state.backgroundPreset=recommendedCountryBg(state.format || 'landscape');
  if(currentTemplate==='player') state.backgroundPreset = recommendedPlayerBg(state.format || 'landscape');
  applyResponsiveLayout(currentTemplate, state.format);
  if(currentTemplate==='player') syncPlayerBackgroundToFormat(true);
  ensurePlayerEditableBoxes();
  const snapshot = clone(state);
  currentTemplate = prevTemplate;
  state = prevState;
  selectedKey = prevSelected;
  interaction = prevInteraction;
  return snapshot;
}
function restoreFormatState(template, format){
  const fmt = normalizedFormat(format);
  const store = ensureTemplateMemory(template);
  const saved = store[fmt];
  state = saved ? clone(saved) : makeDefaultStateForTemplateFormat(template, fmt);
  state.format = fmt;
  ensureStyleDefaults();
  ensureExtraAssets();
  ensurePlayerEditableBoxes();
  if(currentTemplate==='player' && !state.backgroundPreset) state.backgroundPreset = recommendedPlayerBg(fmt);
  if(currentTemplate==='country' && !state.backgroundPreset) state.backgroundPreset = recommendedCountryBg(fmt);
  return !!saved;
}
function buildPresetPayload(){
  rememberCurrentFormatState();
  const store = ensureTemplateMemory(currentTemplate);
  const formatStates = {};
  FORMAT_KEYS.forEach(fmt=>{
    formatStates[fmt] = clone(store[fmt] || makeDefaultStateForTemplateFormat(currentTemplate, fmt));
    formatStates[fmt].format = fmt;
  });
  return {
    type: PRESET_FILE_TYPE,
    version: 1,
    template: currentTemplate,
    activeFormat: normalizedFormat(state.format),
    exportedAt: new Date().toISOString(),
    formatStates
  };
}
function normalizeImportedPreset(payload){
  if(!payload || typeof payload !== 'object') throw new Error('Invalid preset file.');
  if(payload.type === PRESET_FILE_TYPE && payload.formatStates) return payload;
  const fallbackFormat = normalizedFormat(payload.activeFormat || payload.format || state.format || 'landscape');
  return {
    type: PRESET_FILE_TYPE,
    version: 1,
    template: payload.template || currentTemplate,
    activeFormat: fallbackFormat,
    formatStates: {[fallbackFormat]: payload.state ? payload.state : payload}
  };
}
function applyImportedPreset(payload){
  const preset = normalizeImportedPreset(payload);
  const template = preset.template || currentTemplate;
  resetStateFor(template);
  const store = {};
  FORMAT_KEYS.forEach(fmt=>{
    if(preset.formatStates && preset.formatStates[fmt]){
      const imported = clone(preset.formatStates[fmt]);
      imported.format = fmt;
      store[fmt] = imported;
    }
  });
  templateFormatMemory[template] = store;
  const preferred = normalizedFormat(preset.activeFormat || state.format || 'landscape');
  restoreFormatState(template, preferred);
  rememberCurrentFormatState();
  buildForm();
  renderStage();
}
function exportPreset(){
  const payload = buildPresetPayload();
  download(`padbol-${currentTemplate}-preset.json`, JSON.stringify(payload, null, 2), 'application/json');
}
function importPresetFromFile(file){
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const payload = JSON.parse(reader.result);
      applyImportedPreset(payload);
      alert(`Preset imported for ${TEMPLATE_META[currentTemplate]?.title || currentTemplate}. All ratio settings were loaded.`);
    }catch(err){
      console.error(err);
      alert(err && err.message ? err.message : 'Could not import preset file.');
    }
  };
  reader.readAsText(file);
}
function applyResponsiveLayout(template, format){
  const preset = RESPONSIVE_PRESETS[template] && RESPONSIVE_PRESETS[template][format];
  if(preset) deepMerge(state, clone(preset));
  ensureStyleDefaults();
}
function formatLabel(fmt){ return fmt==='square' ? '1:1 Square' : fmt==='story' ? '9:16 Story' : fmt==='poster' ? '2:3 Poster' : fmt==='social' ? '4:5 Feed' : '16:9 Landscape'; }
function quickFormatButtons(){
  if(currentTemplate==='officialPoster'){
    return `<button type="button" class="quickRatio active" data-quick-format="poster" title="Poster"><span class="ratioShape poster"></span><strong>Poster</strong><small>Official ratio</small></button>`;
  }
  const formats = [
    {value:'landscape', label:'16:9', sub:'Landscape', shape:'landscape'},
    {value:'square', label:'1:1', sub:'Square', shape:'square'},
    {value:'story', label:'9:16', sub:'Story', shape:'story'},
    {value:'social', label:'4:5', sub:'Feed', shape:'social'},
    {value:'poster', label:'2:3', sub:'Poster', shape:'poster'}
  ];
  return formats.map(f => `<button type="button" class="quickRatio ${state.format===f.value?'active':''}" data-quick-format="${f.value}" title="${f.sub}"><span class="ratioShape ${f.shape}"></span><strong>${f.label}</strong><small>${f.sub}</small></button>`).join('');
}
function bindQuickFormats(){
  document.querySelectorAll('[data-quick-format]').forEach(btn => btn.addEventListener('click', ()=>{
    const nextFormat = normalizedFormat(btn.dataset.quickFormat);
    if(nextFormat===normalizedFormat(state.format)) return;
    rememberCurrentFormatState();
    restoreFormatState(currentTemplate, nextFormat);
    if(currentTemplate==='player') syncPlayerBackgroundToFormat();
    updateMatchingInput('format', state.format);
    renderStage();
    buildForm();
  }));
}
function playerLayout(format, w, h){
  if(state.playerCard && state.playerCard.frameW!=null){ return { flagX:w*(state.playerCard.flagX/100), flagY:h*(state.playerCard.flagY/100), flagW:w*(state.playerCard.flagW/100), flagH:h*(state.playerCard.flagH/100), frameX:w*(state.playerCard.frameX/100), frameY:h*(state.playerCard.frameY/100), frameW:w*(state.playerCard.frameW/100), frameH:h*(state.playerCard.frameH/100) }; }
  if(format==='square') return { flagX:w*.29, flagY:h*.54, flagW:w*.15, flagH:h*.06, frameX:w*.61, frameY:h*.20, frameW:w*.31, frameH:h*.43 };
  if(format==='story') return { flagX:w*.30, flagY:h*.41, flagW:w*.18, flagH:h*.038, frameX:w*.16, frameY:h*.42, frameW:w*.69, frameH:h*.31 };
  if(format==='social') return { flagX:w*.33, flagY:h*.405, flagW:w*.16, flagH:h*.048, frameX:w*.18, frameY:h*.41, frameW:w*.64, frameH:h*.33 };
  if(format==='poster') return { flagX:w*.34, flagY:h*.402, flagW:w*.16, flagH:h*.044, frameX:w*.17, frameY:h*.40, frameW:w*.66, frameH:h*.31 };
  return { flagX:w*.28, flagY:h*.575, flagW:w*.10, flagH:h*.05, frameX:w*.60, frameY:h*.17, frameW:w*.32, frameH:h*.62 };
}
function getLogoSrc(group){ if(group==='mainLogo' && state.mainLogo.useCustom && imageStore.customMainLogo) return imageStore.customMainLogo; if(group==='frp' && state.frp.useCustom && imageStore.customFrpLogo) return imageStore.customFrpLogo; if(group==='agency' && state.agency.useCustom && imageStore.customAgencyLogo) return imageStore.customAgencyLogo; return assetSrc(state[group].preset); }
function getLogoRatio(group){ if(group==='mainLogo' && state.mainLogo.useCustom && imageStore.customMainLogo) return 1.5; if(group==='frp' && state.frp.useCustom && imageStore.customFrpLogo) return 1.5; if(group==='agency' && state.agency.useCustom && imageStore.customAgencyLogo) return 1.5; return assetRatio(state[group].preset); }
function iconForSection(title='', id=''){ const key = `${id} ${title}`.toLowerCase(); if(key.includes('selected text')) return '✏'; if(key.includes('selected logo')) return '◎'; if(key.includes('flag')) return '⚑'; if(key.includes('edit text')) return '👤'; if(key.includes('extra images')) return '➕'; if(key.includes('export size')) return '▣'; if(key.includes('official cover content')) return '🖼'; if(key.includes('official announcement content')) return '🖼'; if(key.includes('official poster content')) return '🪧'; if(key.includes('welcome poster content') || key.includes('official event')) return '🏟'; if(key.includes('country confirmed content')) return '🌍'; if(key.includes('player announcement content')) return '👤'; if(key.includes('player profile content')) return '📝'; if(key.includes('main logo')) return '◎'; if(key.includes('frp logo')) return '🏅'; if(key.includes('agency')) return '🏛'; if(key.includes('help') || key.includes('notes')) return 'ℹ'; return '•'; }
function detail(title, body, open=false, id=''){ const icon = iconForSection(title, id); return `<details class="detailsBlock" ${open?'open':''} ${id?`id="${id}"`:''}><summary><span class="summaryLead"><span class="summaryIcon">${icon}</span><span>${title}</span></span><span class="summaryArrow">⌄</span></summary><div class="blockBody">${body}</div></details>`; }
function selectControl(path, value, options, label){ return `<div class="control"><label>${label}</label><select data-path="${path}">${options.map(o=>`<option value="${o.value}" ${value===o.value?'selected':''}>${o.label}</option>`).join('')}</select></div>`; }
function inputControl(path, value, label){ return `<div class="control"><label>${label}</label><input data-path="${path}" value="${esc(value)}"></div>`; }
function textareaControl(path, value, label){ return `<div class="control"><label>${label}</label><textarea data-path="${path}">${esc(value)}</textarea></div>`; }
function colorControl(path, value, label){ return `<div class="control"><label>${label}</label><input data-path="${path}" type="color" value="${value}"></div>`; }
function checkboxControl(path, checked, label){ return `<div class="control"><label class="inlineCheck"><input data-path="${path}" type="checkbox" ${checked?'checked':''}> ${label}</label></div>`; }
function rangeControl(path, value, label, min, max, step, suffix=''){ const cleanVal = (value ?? 0); return `<div class="control"><label>${label}</label><div class="rangeRow"><input data-path="${path}" data-suffix="${suffix}" type="range" min="${min}" max="${max}" step="${step}" value="${cleanVal}"><input class="numberInput" data-path="${path}" data-suffix="${suffix}" type="number" min="${min}" max="${max}" step="${step}" value="${cleanVal}"><div class="rangeValue">${cleanVal}${suffix}</div></div></div>`; }
function uploadControl(key, label){ return `<label class="fileLabel">${label}<input data-image="${key}" type="file" accept="image/*"></label>`; }
function countryInputControl(path, value, label){ 
  const options = FLAG_LIST.map(f=>`<option value="${esc(f.name)}">${esc(f.name)}</option>`).join('');
  return `<div class="control countryControl"><label>${label}</label><select data-country-select="${path}"><option value="">Choose country / team from list</option>${options}</select><input data-path="${path}" value="${esc(value)}" placeholder="Or type custom country/team name"></div>`; 
}
function countryListMarkup(){ return `<datalist id="countryList">${FLAG_LIST.map(f=>`<option value="${esc(f.name)}"></option>`).join('')}</datalist>`; }
function ensurePlayerEditableBoxes(){ if(!state.playerCard) state.playerCard={}; if(state.playerCard.frameX==null){ const [w,h]=dims(state.format||'landscape'); const d=playerLayout(state.format||'landscape',w,h); state.playerCard={frameX:+(d.frameX/w*100).toFixed(2), frameY:+(d.frameY/h*100).toFixed(2), frameW:+(d.frameW/w*100).toFixed(2), frameH:+(d.frameH/h*100).toFixed(2), flagX:+(d.flagX/w*100).toFixed(2), flagY:+(d.flagY/h*100).toFixed(2), flagW:+(d.flagW/w*100).toFixed(2), flagH:+(d.flagH/h*100).toFixed(2), photoZoom:1, photoOffsetX:0, photoOffsetY:0, frameScale:1, photoScaleX:1, photoScaleY:1, cropLeft:0, cropRight:0, cropTop:0, cropBottom:0}; } if(state.playerCard.photoZoom==null) state.playerCard.photoZoom=1; if(state.playerCard.photoOffsetX==null) state.playerCard.photoOffsetX=0; if(state.playerCard.photoOffsetY==null) state.playerCard.photoOffsetY=0; if(state.playerCard.frameScale==null) state.playerCard.frameScale=1; if(state.playerCard.photoScaleX==null) state.playerCard.photoScaleX=1; if(state.playerCard.photoScaleY==null) state.playerCard.photoScaleY=1; if(state.playerCard.cropLeft==null) state.playerCard.cropLeft=0; if(state.playerCard.cropRight==null) state.playerCard.cropRight=0; if(state.playerCard.cropTop==null) state.playerCard.cropTop=0; if(state.playerCard.cropBottom==null) state.playerCard.cropBottom=0; }
function ensureBioPhotoSettings(){ if(!state.bioPhoto) state.bioPhoto={photoZoom:1, photoOffsetX:0, photoOffsetY:0, boxOffsetX:0, boxOffsetY:0, frameScale:1, photoScaleX:1, photoScaleY:1, cropLeft:0, cropRight:0, cropTop:0, cropBottom:0}; if(state.bioPhoto.photoZoom==null) state.bioPhoto.photoZoom=1; if(state.bioPhoto.photoOffsetX==null) state.bioPhoto.photoOffsetX=0; if(state.bioPhoto.photoOffsetY==null) state.bioPhoto.photoOffsetY=0; if(state.bioPhoto.boxOffsetX==null) state.bioPhoto.boxOffsetX=0; if(state.bioPhoto.boxOffsetY==null) state.bioPhoto.boxOffsetY=0; if(state.bioPhoto.frameScale==null) state.bioPhoto.frameScale=1; if(state.bioPhoto.photoScaleX==null) state.bioPhoto.photoScaleX=1; if(state.bioPhoto.photoScaleY==null) state.bioPhoto.photoScaleY=1; if(state.bioPhoto.cropLeft==null) state.bioPhoto.cropLeft=0; if(state.bioPhoto.cropRight==null) state.bioPhoto.cropRight=0; if(state.bioPhoto.cropTop==null) state.bioPhoto.cropTop=0; if(state.bioPhoto.cropBottom==null) state.bioPhoto.cropBottom=0; }
function ensureBioInfoSettings(){ if(!state.bioInfo) state.bioInfo={boxOffsetX:0,boxOffsetY:0}; if(state.bioInfo.boxOffsetX==null) state.bioInfo.boxOffsetX=0; if(state.bioInfo.boxOffsetY==null) state.bioInfo.boxOffsetY=0; }
function bioInfoOffsetPx(){ ensureBioInfoSettings(); const [W,H]=dims(state.format||'landscape'); return {dx:W*((state.bioInfo.boxOffsetX||0)/100), dy:H*((state.bioInfo.boxOffsetY||0)/100)}; }
function bioInfoBoxControls(open=false){ ensureBioInfoSettings(); const cfg=state.bioInfo; const body='<p class="note compact">Move the whole left player-info box: border, logo, texts, and flag together.</p>'+rangeControl('bioInfo.boxOffsetX', cfg.boxOffsetX||0, 'Info box position X', -100, 100, 0.5, '%')+rangeControl('bioInfo.boxOffsetY', cfg.boxOffsetY||0, 'Info box position Y', -100, 100, 0.5, '%'); return detail('Player info box position', body, open, open?'selectedInspector':''); }
function bioPhotoFrameRect(format=state.format){ ensureBioPhotoSettings(); const [w,h]=dims(format||state.format||'landscape'); const presets={ landscape:{xPct:56,yPct:8,maxWPct:36,maxHPct:52}, square:{xPct:55,yPct:8,maxWPct:36,maxHPct:44}, story:{xPct:53,yPct:8,maxWPct:40,maxHPct:34}, social:{xPct:53,yPct:8,maxWPct:40,maxHPct:36}, poster:{xPct:53,yPct:8,maxWPct:40,maxHPct:36} }; const cfg=presets[format]||presets.landscape; const bw=w*(cfg.maxWPct/100); const bh=h*(cfg.maxHPct/100); const scale=Math.max(0.5,Math.min(2.5,Number(state.bioPhoto?.frameScale||1))); const sw=bw*scale; const sh=bh*scale; const bx=w*(cfg.xPct/100); const by=h*(cfg.yPct/100); return {x:bx-(sw-bw)/2 + w*((state.bioPhoto.boxOffsetX||0)/100), y:by-(sh-bh)/2 + h*((state.bioPhoto.boxOffsetY||0)/100), w:sw, h:sh, rx:26}; }
function playerPhotoControls(open=false){ ensurePlayerEditableBoxes(); const cfg = state.playerCard; const intro = '<p class="note compact">Player photo tools: click the photo in preview to upload / replace it. Box Position moves the whole photo box. Box Scale makes the whole photo area bigger with its border. Move Image / Zoom Image affect only the image inside. Crop Image literally cuts from left / right / top / bottom without auto-zooming.</p>'; const boxPosBlock = detail('Box position', rangeControl('playerCard.frameX', cfg.frameX, 'Box position X', 0, 100, 0.5, '%') + rangeControl('playerCard.frameY', cfg.frameY, 'Box position Y', 0, 100, 0.5, '%') + rangeControl('playerCard.frameW', cfg.frameW, 'Box width', 5, 100, 0.5, '%') + rangeControl('playerCard.frameH', cfg.frameH, 'Box height', 5, 100, 0.5, '%'), false); const scaleBlock = detail('Box scale', rangeControl('playerCard.frameScale', cfg.frameScale ?? 1, 'Photo box scale', 0.5, 2.5, 0.01, '×'), false); const moveBlock = detail('Move image', rangeControl('playerCard.photoOffsetX', cfg.photoOffsetX, 'Move image X', -200, 200, 0.5, '%') + rangeControl('playerCard.photoOffsetY', cfg.photoOffsetY, 'Move image Y', -200, 200, 0.5, '%'), false); const zoomBlock = detail('Zoom image', rangeControl('playerCard.photoZoom', cfg.photoZoom, 'Zoom image', 0.1, 8, 0.02, '×'), false); const cropBlock = detail('Crop image', rangeControl('playerCard.cropLeft', cfg.cropLeft, 'Crop from LEFT', 0, 90, 0.5, '%') + rangeControl('playerCard.cropRight', cfg.cropRight, 'Crop from RIGHT', 0, 90, 0.5, '%') + rangeControl('playerCard.cropTop', cfg.cropTop, 'Crop from TOP', 0, 90, 0.5, '%') + rangeControl('playerCard.cropBottom', cfg.cropBottom, 'Crop from BOTTOM', 0, 90, 0.5, '%'), false); const body = intro + uploadControl('playerPhoto','Upload / replace player photo') + boxPosBlock + scaleBlock + moveBlock + zoomBlock + cropBlock; return detail('Player photo options', body, open, open ? 'selectedInspector' : ''); }
function bioPhotoControls(open=false){ ensureBioPhotoSettings(); const cfg = state.bioPhoto; const intro = '<p class="note compact">Player profile photo has no fixed aspect-ratio crop now. Zoom Image scales the whole image. Crop Image only cuts when you use the crop sliders.</p>'; const boxMoveBlock = detail('Box position', rangeControl('bioPhoto.boxOffsetX', cfg.boxOffsetX || 0, 'Move box X', -100, 100, 0.5, '%') + rangeControl('bioPhoto.boxOffsetY', cfg.boxOffsetY || 0, 'Move box Y', -100, 100, 0.5, '%'), false); const scaleBlock = detail('Box scale', rangeControl('bioPhoto.frameScale', cfg.frameScale ?? 1, 'Photo box scale', 0.5, 2.5, 0.01, '×'), false); const moveBlock = detail('Move image', rangeControl('bioPhoto.photoOffsetX', cfg.photoOffsetX, 'Move image X', -200, 200, 0.5, '%') + rangeControl('bioPhoto.photoOffsetY', cfg.photoOffsetY, 'Move image Y', -200, 200, 0.5, '%'), false); const zoomBlock = detail('Zoom image', rangeControl('bioPhoto.photoZoom', cfg.photoZoom, 'Zoom image', 0.1, 8, 0.02, '×'), false); const cropBlock = detail('Crop image', rangeControl('bioPhoto.cropLeft', cfg.cropLeft, 'Crop from LEFT', 0, 90, 0.5, '%') + rangeControl('bioPhoto.cropRight', cfg.cropRight, 'Crop from RIGHT', 0, 90, 0.5, '%') + rangeControl('bioPhoto.cropTop', cfg.cropTop, 'Crop from TOP', 0, 90, 0.5, '%') + rangeControl('bioPhoto.cropBottom', cfg.cropBottom, 'Crop from BOTTOM', 0, 90, 0.5, '%'), false); const body = intro + uploadControl('playerPhoto','Upload / replace player photo') + boxMoveBlock + scaleBlock + moveBlock + zoomBlock + cropBlock; return detail('Player photo options', body, open, open ? 'selectedInspector' : ''); }
function ensureExtraAssets(){ if(!state.extraAsset1) state.extraAsset1={show:false,x:50,y:50,w:16}; if(!state.extraAsset2) state.extraAsset2={show:false,x:50,y:58,w:16}; }
function extraAssetRatio(key){ const src=imageStore[key]; if(!src) return 1; const m=String(src).match(/extraAsset(\d)/); return 1; }
function uploadedAssetBox(key){ ensureExtraAssets(); const cfg=state[key]; const [W,H]=dims(state.format); const src=imageStore[key]; const ratio=1; const w=W*(cfg.w/100); const h=w/ratio; const x=W*(cfg.x/100)-w/2; const y=H*(cfg.y/100)-h/2; return {x,y,width:w,height:h}; }
function buildSelectedInspector(){
  if(!selectedKey) return '';
  if(state.styles && state.styles[selectedKey]){
    const st=state.styles[selectedKey];
    let html='';
    html += '<p class="note">Selected text. Use these controls or drag / resize directly in preview. Click the small pencil icon in preview to jump here.</p>';
    if(String(selectedKey).startsWith('customText_')){
      html += inputControl(selectedKey, state[selectedKey] || '', 'Text content');
      html += '<div class="control"><button type="button" class="secondary" data-delete-custom-text="'+selectedKey+'">Delete this text</button></div>';
    }
    if(currentTemplate==='country' && selectedKey==='country'){
      html += countryInputControl('country', state.country, 'Country / team');
      html += checkboxControl('countryFigure.show', state.countryFigure?.show !== false, 'Show playing figure above country name');
      html += selectControl('countryFigure.preset', state.countryFigure?.preset || 'countryFigure1', COUNTRY_FIGURE_OPTIONS, 'Playing figure option');
      html += rangeControl('countryFigure.x', state.countryFigure?.x ?? 63.93, 'Figure position X', 0, 100, 0.5, '%');
      html += rangeControl('countryFigure.y', state.countryFigure?.y ?? 37.55, 'Figure position Y', 0, 100, 0.5, '%');
      html += rangeControl('countryFigure.w', state.countryFigure?.w ?? 24.54, 'Figure size', 8, 60, 0.5, '%');
      html += rangeControl('countryFigure.opacity', state.countryFigure?.opacity ?? 0.88, 'Figure opacity', 0, 1, 0.01, '');
      html += checkboxControl('countryOverlay.show', state.countryOverlay?.show !== false, 'Show figure glow in frame');
      html += rangeControl('countryOverlay.opacity', state.countryOverlay?.opacity ?? 0.20, 'Inside frame background opacity', 0, 1, 0.01, '');
    }
    html += rangeControl(`styles.${selectedKey}.x`, st.x, 'Position X', 0, 100, 0.5, '%');
    html += rangeControl(`styles.${selectedKey}.y`, st.y, 'Position Y', 0, 100, 0.5, '%');
    html += rangeControl(`styles.${selectedKey}.scale`, st.scale, 'Visible text size', 0.4, 3.5, 0.05, '×');
    html += selectControl(`styles.${selectedKey}.fontFamily`, st.fontFamily, [
      {value:'Impact, Haettenschweiler, Arial Black, sans-serif', label:'Impact / Extra Bold'},
      {value:'Arial Black, Arial, sans-serif', label:'Arial Black'},
      {value:'Tahoma, Verdana, sans-serif', label:'Tahoma / Verdana'},
      {value:'Georgia, Times New Roman, serif', label:'Georgia Serif'}
    ], 'Font family');
    html += selectControl(`styles.${selectedKey}.fontWeight`, String(st.fontWeight), [
      {value:'400',label:'Regular 400'},{value:'600',label:'SemiBold 600'},{value:'700',label:'Bold 700'},{value:'800',label:'ExtraBold 800'},{value:'900',label:'Black 900'}
    ], 'Font weight');
    html += checkboxControl(`styles.${selectedKey}.italic`, st.italic, 'Italic');
    html += checkboxControl(`styles.${selectedKey}.gradient`, st.gradient, 'Gradient fill');
    html += colorControl(`styles.${selectedKey}.gradientStart`, st.gradientStart, 'Gradient color start');
    html += colorControl(`styles.${selectedKey}.gradientEnd`, st.gradientEnd, 'Gradient color end');
    html += checkboxControl(`styles.${selectedKey}.outline`, st.outline, 'Text outline');
    html += rangeControl(`styles.${selectedKey}.outlineWidth`, st.outlineWidth, 'Outline width', 0, 8, 0.2, 'px');
    html += colorControl(`styles.${selectedKey}.outlineColor`, st.outlineColor, 'Outline color');
    html += checkboxControl(`styles.${selectedKey}.shadow`, st.shadow, 'Text shadow');
    html += rangeControl(`styles.${selectedKey}.shadowDx`, st.shadowDx, 'Shadow offset X', -6, 6, 0.2, 'px');
    html += rangeControl(`styles.${selectedKey}.shadowDy`, st.shadowDy, 'Shadow offset Y', -6, 6, 0.2, 'px');
    html += rangeControl(`styles.${selectedKey}.shadowBlur`, st.shadowBlur, 'Shadow blur', 0, 12, 0.2, 'px');
    html += colorControl(`styles.${selectedKey}.shadowColor`, st.shadowColor, 'Shadow color');
    return detail(`Selected text: ${selectedKey}`, html, true, 'selectedInspector');
  }
  if(selectedKey==='flag'){
    ensurePlayerEditableBoxes();
    let html = flagPickerSection(true);
    if(currentTemplate==='player' || currentTemplate==='bio'){
      html += detail('Selected flag position', `${rangeControl('playerCard.flagX', state.playerCard.flagX, 'Position X', 0, 100, 0.5, '%')}${rangeControl('playerCard.flagY', state.playerCard.flagY, 'Position Y', 0, 100, 0.5, '%')}${rangeControl('playerCard.flagW', state.playerCard.flagW, 'Width', 4, 30, 0.5, '%')}${rangeControl('playerCard.flagH', state.playerCard.flagH, 'Height', 2, 20, 0.5, '%')}`, true, 'selectedInspector');
    }
    return html;
  }
  if(selectedKey==='playerPhoto' && currentTemplate==='player'){
    return playerPhotoControls(true);
  }
  if(selectedKey==='playerPhoto' && currentTemplate==='bio'){
    return bioPhotoControls(true);
  }
  if(['extraAsset1','extraAsset2'].includes(selectedKey)){
    ensureExtraAssets();
    const cfg=state[selectedKey];
    const html = `${checkboxControl(selectedKey+'.show', cfg.show, 'Show this uploaded image')}${rangeControl(selectedKey+'.x', cfg.x, 'Position X', 0, 100, 0.5, '%')}${rangeControl(selectedKey+'.y', cfg.y, 'Position Y', 0, 100, 0.5, '%')}${rangeControl(selectedKey+'.w', cfg.w, 'Width', 4, 60, 0.5, '%')}${uploadControl(selectedKey, selectedKey==='extraAsset1'?'Upload / replace extra image 1':'Upload / replace extra image 2')}`;
    return detail(`Selected extra image: ${selectedKey==='extraAsset1'?'1':'2'}`, html, true, 'selectedInspector');
  }
  if(selectedKey==='countryFigure' && currentTemplate==='country'){
    const cfg = state.countryFigure || {show:true,preset:'countryFigure1',x:63.93,y:37.55,w:24.54,opacity:0.88};
    const html = `${checkboxControl('countryFigure.show', cfg.show !== false, 'Show playing figure')}${selectControl('countryFigure.preset', cfg.preset || 'countryFigure1', COUNTRY_FIGURE_OPTIONS, 'Playing figure option')}${rangeControl('countryFigure.x', cfg.x ?? 63.93, 'Position X', 0, 100, 0.5, '%')}${rangeControl('countryFigure.y', cfg.y ?? 37.55, 'Position Y', 0, 100, 0.5, '%')}${rangeControl('countryFigure.w', cfg.w ?? 24.54, 'Width', 8, 60, 0.5, '%')}${rangeControl('countryFigure.opacity', cfg.opacity ?? 0.88, 'Opacity', 0, 1, 0.01, '')}`;
    return detail('Selected playing figure', html, true, 'selectedInspector');
  }
  if(['mainLogo','frp','agency','fipa','prima'].includes(selectedKey)){
    const cfg=state[selectedKey];
    let html='';
    html += '<p class="note compact">Selected logo. Quick preset selection stays below; advanced controls are here.</p>';
    html += checkboxControl(`${selectedKey}.show`, cfg.show, 'Show this logo');
    html += rangeControl(`${selectedKey}.w`, cfg.w, 'Size', 4, 40, 0.5, '%');
    html += rangeControl(`${selectedKey}.x`, cfg.x, 'Position X', 0, 100, 0.5, '%');
    html += rangeControl(`${selectedKey}.y`, cfg.y, 'Position Y', 0, 100, 0.5, '%');
    html += checkboxControl(`${selectedKey}.outline`, cfg.outline, 'Outline');
    html += rangeControl(`${selectedKey}.outlineWidth`, cfg.outlineWidth, 'Outline width', 0, 8, 0.2, 'px');
    html += colorControl(`${selectedKey}.outlineColor`, cfg.outlineColor, 'Outline color');
    return detail(`Selected logo: ${selectedKey}`, html, true, 'selectedInspector');
  }
  return '';
}
function logoSection(group,title,presets,previewKeys,darkSet=[]){ const g = state[group]; const previewClass = previewKeys.length===3?'previewGrid three':'previewGrid'; return detail(title, `${checkboxControl(group+'.show', g.show, 'Show this logo')}${selectControl(group+'.preset', g.preset, presets, 'Preset version')}<div class="${previewClass}">${previewKeys.map(k=>`<button type="button" class="logoPreview ${darkSet.includes(k)?'dark':'light'} ${g.preset===k?'active':''}" data-logo-group="${group}" data-logo-preset="${k}" aria-label="Select ${group} preset ${k}"><img src="${assetSrc(k)}" alt="${k}"></button>`).join('')}</div>${checkboxControl(group+'.useCustom', g.useCustom, 'Use uploaded custom override')}${uploadControl(group==='mainLogo'?'customMainLogo':group==='frp'?'customFrpLogo':group==='agency'?'customAgencyLogo':group==='fipa'?'customFipaLogo':'customPrimaLogo','Upload custom image')}<p class="note compact">Click any preview image to select that logo preset.</p>`, false); }

function flagUrl(code, size='w80'){ return `https://flagcdn.com/${size}/${String(code).toLowerCase()}.png`; }
function setSelectedFlag(code, name){
  state.flagCode = String(code).toLowerCase();
  state.flagName = name || code.toUpperCase();
  state.country = state.flagName;
  state.countryAccent = countryAccentColorForCode(state.flagCode);
  updateMatchingInput('country', state.country);
  const url = flagUrl(state.flagCode, 'w320');
  // Try to inline the remote public flag so PNG export works more reliably.
  fetch(url).then(r => r.blob()).then(blob => new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  })).then(dataUri => {
    imageStore.flag = dataUri;
    renderStage();
  }).catch(() => {
    imageStore.flag = url;
    renderStage();
  });
  selectedKey = null;
  buildForm();
}
function flagPickerSection(open=false){
  const q = (state.flagSearch || '').toLowerCase().trim();
  const list = FLAG_LIST.filter(f => !q || f.search.toLowerCase().includes(q) || f.name.toLowerCase().includes(q) || f.code.includes(q)).slice(0, 280);
  const selected = state.flagCode || '';
  const cards = list.map(f => `<button class="flagOption ${selected===f.code?'active':''}" type="button" data-flag-code="${f.code}" data-flag-name="${esc(f.name)}"><img src="${flagUrl(f.code,'w80')}" alt="${esc(f.name)} flag"><span>${esc(f.name)}</span><small>${f.code.toUpperCase()}</small></button>`).join('');
  return detail('Flag selector', `<p class="note">Public source: FlagCDN. Search by country name or country code, then click a flag to use it. Manual flag upload was removed.</p><div class="control"><label>Search flag</label><input id="flagSearchInput" value="${esc(state.flagSearch || '')}" placeholder="Search: Romania, France, RO, FR..."></div><div class="flagGrid">${cards}</div>`, open, 'flagPicker');
}
function bindFlagPicker(){
  const search = document.getElementById('flagSearchInput');
  if(search){
    search.addEventListener('input', e => {
      state.flagSearch = e.target.value;
      buildForm();
      const s2 = document.getElementById('flagSearchInput');
      if(s2){ s2.focus(); s2.setSelectionRange(s2.value.length, s2.value.length); }
    });
  }
  document.querySelectorAll('[data-flag-code]').forEach(btn => {
    btn.addEventListener('click', () => setSelectedFlag(btn.dataset.flagCode, btn.dataset.flagName));
  });
}

function renderAssetShelf(){
  const host = $('assetShelf');
  if(!host) return;
  if(!['master','announcement','officialPoster','welcome','player','country'].includes(currentTemplate)){
    host.innerHTML = '';
    host.classList.add('hidden');
    return;
  }
  host.classList.remove('hidden');
  if(currentTemplate==='master'){
    const current = imageStore.photo ? 'custom' : (state.backgroundPreset || recommendedMasterBg(state.format || 'landscape'));
    const bgChoicesAll = [
      {key:'officialBg', label:'Landscape default', formats:['landscape']},
      {key:'officialCoverAltLogoCourt', label:'Landscape alt — logo court', formats:['landscape']},
      {key:'officialCoverAltNeonCourt', label:'Landscape alt — neon court', formats:['landscape']},
      {key:'bgAlt1', label:'Square default', formats:['square']},
      {key:'bgAlt5', label:'Square / social alt', formats:['square','social']},
      {key:'bgAlt2', label:'Story default', formats:['story','poster']},
      {key:'bgAlt4', label:'Story / poster alt', formats:['story','poster']}
    ];
    const bgChoices = bgChoicesAll.filter(choice=>choice.formats.includes(state.format || 'landscape'));
    host.innerHTML = `<div class="assetShelfHead"><div><strong>Official background options</strong><span>Only backgrounds that fit the currently selected ratio are shown here, so each template shows the matching library for that export size.</span></div><label class="uploadChip">Upload new background<input id="bgUploadInput" type="file" accept="image/*"></label></div><div class="assetGrid">${bgChoices.map(choice=>`<button class="assetCard ${current===choice.key?'active':''}" data-bg-choice="${choice.key}"><img src="${assetSrc(choice.key)}" alt="${choice.label}"><span>${choice.label}</span></button>`).join('')}<button class="assetCard uploadCard ${current==='custom'?'active':''}" id="bgUploadCard"><div class="uploadInner">+<small>Uploaded custom background</small></div></button></div>`;
    host.querySelectorAll('[data-bg-choice]').forEach(btn=>btn.addEventListener('click',()=>{ state.backgroundPreset = btn.dataset.bgChoice; imageStore.photo = null; renderAssetShelf(); renderStage(); }));
    const input = host.querySelector('#bgUploadInput');
    const uploadCard = host.querySelector('#bgUploadCard');
    const openPicker = ()=>input && input.click();
    if(uploadCard) uploadCard.addEventListener('click', openPicker);
    if(input) input.addEventListener('change', e=>{ const file = e.target.files[0]; if(!file) return; const r = new FileReader(); r.onload = ()=>{ imageStore.photo = r.result; renderAssetShelf(); renderStage(); }; r.readAsDataURL(file); });
    return;
  }
  if(currentTemplate==='announcement'){
    const current = imageStore.photo ? 'custom' : (state.backgroundPreset || recommendedAnnouncementBg(state.format || 'landscape'));
    const bgChoices = ANNOUNCEMENT_BG_OPTIONS.filter(bg => bg.formats.includes(state.format || 'landscape'));
    const cards = bgChoices.map(bg => `<button class="assetCard ${current===bg.key?'active':''}" data-announcement-bg-choice="${bg.key}"><img src="${assetSrc(bg.key)}" alt="${bg.label}"><span><strong>${bg.label}</strong><small>${bg.note}</small></span></button>`).join('');
    host.innerHTML = `<div class="assetShelfHead"><div><strong>Official announcement background options</strong><span>This template now uses the supplied announcement background set and the uploaded announcement logo as the default logo.</span></div><label class="uploadChip">Upload new background<input id="announcementBgUploadInput" type="file" accept="image/*"></label></div><div class="assetGrid">${cards}<button class="assetCard uploadCard ${current==='custom'?'active':''}" id="announcementBgUploadCard"><div class="uploadInner">+<small>Uploaded custom background</small></div></button></div>`;
    host.querySelectorAll('[data-announcement-bg-choice]').forEach(btn=>btn.addEventListener('click',()=>{ state.backgroundPreset = btn.dataset.announcementBgChoice; imageStore.photo = null; renderAssetShelf(); renderStage(); }));
    const input = host.querySelector('#announcementBgUploadInput');
    const uploadCard = host.querySelector('#announcementBgUploadCard');
    const openPicker = ()=>input && input.click();
    if(uploadCard) uploadCard.addEventListener('click', openPicker);
    if(input) input.addEventListener('change', e=>{ const file = e.target.files[0]; if(!file) return; const r = new FileReader(); r.onload = ()=>{ imageStore.photo = r.result; renderAssetShelf(); renderStage(); }; r.readAsDataURL(file); });
    return;
  }
  if(currentTemplate==='officialPoster'){
    const current = imageStore.posterBg ? 'custom' : (state.backgroundPreset || recommendedOfficialPosterBg(state.format || 'poster'));
    host.innerHTML = `<div class="assetShelfHead"><div><strong>Official poster background</strong><span>This separate poster editor is locked to the supplied official poster ratio and uses the new official poster logo by default.</span></div><label class="uploadChip">Upload new background<input id="officialPosterBgUploadInput" type="file" accept="image/*"></label></div><div class="assetGrid"><button class="assetCard ${current==='officialPosterBg'?'active':''}" data-official-poster-bg-choice="officialPosterBg"><img src="${assetSrc('officialPosterBg')}" alt="Official poster background"><span><strong>Official poster default</strong><small>Supplied poster-only template</small></span></button><button class="assetCard uploadCard ${current==='custom'?'active':''}" id="officialPosterBgUploadCard"><div class="uploadInner">+<small>Uploaded custom background</small></div></button></div>`;
    host.querySelectorAll('[data-official-poster-bg-choice]').forEach(btn=>btn.addEventListener('click',()=>{ state.backgroundPreset = btn.dataset.officialPosterBgChoice; imageStore.posterBg = null; renderAssetShelf(); renderStage(); }));
    const input = host.querySelector('#officialPosterBgUploadInput');
    const uploadCard = host.querySelector('#officialPosterBgUploadCard');
    const openPicker = ()=>input && input.click();
    if(uploadCard) uploadCard.addEventListener('click', openPicker);
    if(input) input.addEventListener('change', e=>{ const file = e.target.files[0]; if(!file) return; const r = new FileReader(); r.onload = ()=>{ imageStore.posterBg = r.result; renderAssetShelf(); renderStage(); }; r.readAsDataURL(file); });
    return;
  }
  if(currentTemplate==='welcome'){
    const current = imageStore.welcomeBg ? 'custom' : (state.backgroundPreset || recommendedWelcomeBg(state.format || 'landscape'));
    const bgChoicesAll = [
      {key:'welcomeEventBgLandscape', label:'Landscape default', note:'Best for 16:9 landscape', formats:['landscape']},
      {key:'welcomeEventBgStory', label:'Story default', note:'Best for 9:16 story', formats:['story']},
      {key:'welcomeEventBgPoster', label:'Poster default', note:'Best for 2:3 poster', formats:['poster']},
      {key:'welcomeEventBgSquare', label:'Square default', note:'Best for 1:1 square', formats:['square']},
      {key:'welcomeEventBgSocial', label:'Feed default', note:'Best for 4:5 feed', formats:['social']}
    ];
    const bgChoices = bgChoicesAll.filter(bg => bg.formats.includes(state.format || 'landscape'));
    const cards = bgChoices.map(bg => `<button class="assetCard ${current===bg.key?'active':''}" data-welcome-bg-choice="${bg.key}"><img src="${assetSrc(bg.key)}" alt="${bg.label}"><span><strong>${bg.label}</strong><small>${bg.note}</small></span></button>`).join('');
    host.innerHTML = `<div class="assetShelfHead"><div><strong>Official event background options</strong><span>Only the background that matches the currently selected export ratio is shown here.</span></div><label class="uploadChip">Upload new background<input id="welcomeBgUploadInput" type="file" accept="image/*"></label></div><div class="assetGrid">${cards}<button class="assetCard uploadCard ${current==='custom'?'active':''}" id="welcomeBgUploadCard"><div class="uploadInner">+<small>Uploaded custom background</small></div></button></div>`;
    host.querySelectorAll('[data-welcome-bg-choice]').forEach(btn=>btn.addEventListener('click',()=>{ state.backgroundPreset = btn.dataset.welcomeBgChoice; imageStore.welcomeBg = null; renderAssetShelf(); renderStage(); }));
    const input = host.querySelector('#welcomeBgUploadInput');
    const uploadCard = host.querySelector('#welcomeBgUploadCard');
    const openPicker = ()=>input && input.click();
    if(uploadCard) uploadCard.addEventListener('click', openPicker);
    if(input) input.addEventListener('change', e=>{ const file = e.target.files[0]; if(!file) return; const r = new FileReader(); r.onload = ()=>{ imageStore.welcomeBg = r.result; renderAssetShelf(); renderStage(); }; r.readAsDataURL(file); });
    return;
  }
  if(currentTemplate==='country'){
    const current = imageStore.countryBg ? 'custom' : (state.backgroundPreset || 'countryBgMain');
    const cards = COUNTRY_BG_OPTIONS.map(bg => `<button class="assetCard ${current===bg.key?'active':''}" data-country-bg-choice="${bg.key}"><img src="${assetSrc(countryBgAssetKey(bg.key, state.format || 'landscape'))}" alt="${bg.label}"><span><strong>${bg.label}</strong><small>${bg.note}</small></span></button>`).join('');
    host.innerHTML = `<div class="assetShelfHead"><div><strong>Team confirmed background options</strong><span>Main supplied version stays the same for 16:9, 1:1, and 4:5. The new vertical reference is now used for 9:16 and 2:3. The previous country template remains available as an alternative.</span></div><label class="uploadChip">Upload new background<input id="countryBgUploadInput" type="file" accept="image/*"></label></div><div class="assetGrid">${cards}<button class="assetCard uploadCard ${current==='custom'?'active':''}" id="countryBgUploadCard"><div class="uploadInner">+<small>Uploaded custom background</small></div></button></div>`;
    host.querySelectorAll('[data-country-bg-choice]').forEach(btn=>btn.addEventListener('click',()=>{ state.backgroundPreset = btn.dataset.countryBgChoice; imageStore.countryBg = null; renderAssetShelf(); renderStage(); }));
    const input = host.querySelector('#countryBgUploadInput');
    const uploadCard = host.querySelector('#countryBgUploadCard');
    const openPicker = ()=>input && input.click();
    if(uploadCard) uploadCard.addEventListener('click', openPicker);
    if(input) input.addEventListener('change', e=>{ const file = e.target.files[0]; if(!file) return; const r = new FileReader(); r.onload = ()=>{ imageStore.countryBg = r.result; renderAssetShelf(); renderStage(); }; r.readAsDataURL(file); });
    return;
  }
  const current = imageStore.playerBg ? 'custom' : (state.backgroundPreset || recommendedPlayerBg(state.format));
  const playerBgChoices = PLAYER_BG_OPTIONS.filter(bg => (state.format==='landscape' && bg.key==='playerBg1') || (state.format==='story' && bg.key.startsWith('playerBgStory')) || (state.format==='poster' && bg.key.startsWith('playerBgStory')) || (state.format==='square' && bg.key.startsWith('playerBgSquare')) || (state.format==='social' && bg.key.startsWith('playerBgSquare')));
  const cards = playerBgChoices.map(bg => `<button class="assetCard ${current===bg.key?'active':''}" data-player-bg-choice="${bg.key}"><img src="${assetSrc(bg.key)}" alt="${bg.label}"><span><strong>${bg.label}</strong><small>${bg.note}</small></span></button>`).join('');
  host.innerHTML = `<div class="assetShelfHead"><div><strong>Player card background options</strong><span>Only backgrounds matching the current ratio are shown here. Switch ratio to see that ratio's background library.</span></div><label class="uploadChip">Upload new background<input id="playerBgUploadInput" type="file" accept="image/*"></label></div><div class="assetGrid">${cards}<button class="assetCard uploadCard ${current==='custom'?'active':''}" id="playerBgUploadCard"><div class="uploadInner">+<small>Uploaded custom background</small></div></button></div>`;
  host.querySelectorAll('[data-player-bg-choice]').forEach(btn=>btn.addEventListener('click',()=>{ state.backgroundPreset = btn.dataset.playerBgChoice; imageStore.playerBg = null; renderAssetShelf(); renderStage(); }));
  const input = host.querySelector('#playerBgUploadInput');
  const uploadCard = host.querySelector('#playerBgUploadCard');
  const openPicker = ()=>input && input.click();
  if(uploadCard) uploadCard.addEventListener('click', openPicker);
  if(input) input.addEventListener('change', e=>{ const file = e.target.files[0]; if(!file) return; const r = new FileReader(); r.onload = ()=>{ imageStore.playerBg = r.result; renderAssetShelf(); renderStage(); }; r.readAsDataURL(file); });
}

function ensureSeparateLogoSlots(){
  if(!state.fipa) state.fipa = {preset:'fipaWhiteLogo',useCustom:false,show:false,x:92,y:12,w:14,outline:false,outlineWidth:0,outlineColor:'#ffffff'};
  if(!state.prima) state.prima = {preset:'primaSportLogo',useCustom:false,show:false,x:87,y:84,w:15,outline:false,outlineWidth:0,outlineColor:'#ffffff'};
}

function buildTemplateFields(){ ensureSeparateLogoSlots(); let html=''; ensurePlayerEditableBoxes(); ensureBioPhotoSettings(); ensureExtraAssets(); ensureCustomTexts(); html += buildSelectedInspector();
  if(currentTemplate==='master') html += detail('Official cover content', `${inputControl('headline', state.headline, 'Headline')}${inputControl('hostedText', state.hostedText, 'Hosted by text')}${inputControl('hashtag', state.hashtag, 'Hashtag')}${inputControl('agencySupportText', state.agencySupportText, 'Agency support text')}${customTextControls()}<p class="note compact">Background upload was moved below the preview to keep this menu cleaner.</p>`, true);
  if(currentTemplate==='announcement') html += detail('Official announcement content', `${inputControl('headline', state.headline, 'Headline')}${inputControl('hostedText', state.hostedText, 'Hosted by text')}${inputControl('hashtag', state.hashtag, 'Hashtag')}${inputControl('agencySupportText', state.agencySupportText, 'Agency support text')}${customTextControls()}<p class="note compact">Background upload was moved below the preview to keep this menu cleaner.</p>`, true);
  if(currentTemplate==='officialPoster') html += detail('Official poster content', `${inputControl('welcomeLine', state.welcomeLine, 'Top line')}${textareaControl('titleLines', state.titleLines, 'Main title')}${inputControl('subLine', state.subLine, 'Sub line')}${inputControl('venue', state.venue, 'Venue line')}${inputControl('date', state.date, 'Date line')}${inputControl('website', state.website, 'Website')}${inputControl('hashtag', state.hashtag, 'Hashtag')}${inputControl('hostedText', state.hostedText, 'Hosted by line')}${customTextControls()}<p class="note compact">This separate editor is poster-only and uses the supplied official poster background and logo by default.</p>`, true);
  if(currentTemplate==='welcome') html += detail('Edit text', `${textareaControl('titleLines', state.titleLines, 'Main title')}${inputControl('venue', state.venue, 'Event line')}${inputControl('date', state.date, 'Event label')}${inputControl('website', state.website, 'Hashtag / footer')}${customTextControls()}`, false);
  if(currentTemplate==='country') html += detail('Edit text', `${textareaControl('titleLines', state.titleLines, 'Title lines')}${countryInputControl('country', state.country, 'Country / Team')}${inputControl('footerTop', state.footerTop, 'Footer top')}${inputControl('footerBottom', state.footerBottom, 'Footer bottom')}${inputControl('hashtag', state.hashtag, 'Hashtag')}${customTextControls()}${uploadControl('photo','Country / team photo')}${checkboxControl('countryFigure.show', state.countryFigure?.show !== false, 'Show playing figure above country name')}${selectControl('countryFigure.preset', state.countryFigure?.preset || 'countryFigure1', COUNTRY_FIGURE_OPTIONS, 'Playing figure option')}${rangeControl('countryFigure.x', state.countryFigure?.x ?? 63.93, 'Figure position X', 0, 100, 0.5, '%')}${rangeControl('countryFigure.y', state.countryFigure?.y ?? 37.55, 'Figure position Y', 0, 100, 0.5, '%')}${rangeControl('countryFigure.w', state.countryFigure?.w ?? 24.54, 'Figure size', 8, 60, 0.5, '%')}${rangeControl('countryFigure.opacity', state.countryFigure?.opacity ?? 0.88, 'Figure opacity', 0, 1, 0.01, '')}${checkboxControl('countryOverlay.show', state.countryOverlay?.show !== false, 'Show figure glow in frame')}${rangeControl('countryOverlay.opacity', state.countryOverlay?.opacity ?? 0.20, 'Inside frame background opacity', 0, 1, 0.01, '')}`, false);
  if(currentTemplate==='player') html += detail('Edit text', `${inputControl('announcementLabel', state.announcementLabel, 'Announcement label')}${inputControl('player', state.player, 'Player name')}${countryInputControl('country', state.country, 'Country')}${textareaControl('footerLines', state.footerLines, 'Footer lines')}${inputControl('hashtag', state.hashtag, 'Hashtag')}${customTextControls()}<p class="note compact">Choosing a country from the list updates the flag automatically. You can still type over the country name later if needed.</p>${countryListMarkup()}`, false) + playerPhotoControls(false) + flagPickerSection(selectedKey==='flag');
  if(currentTemplate==='bio') html += detail('Edit text', `${inputControl('player', state.player, 'Player name')}${countryInputControl('country', state.country, 'Country')}${inputControl('sectionLabel', state.sectionLabel, 'Section label')}${textareaControl('bioText', state.bioText, 'Bio / palmares')}${textareaControl('footerLines', state.footerLines, 'Footer lines')}${inputControl('hashtag', state.hashtag, 'Hashtag')}${customTextControls()}${countryListMarkup()}`, false) + bioInfoBoxControls(false) + bioPhotoControls(false) + flagPickerSection(selectedKey==='flag');
  html += logoSection('mainLogo','Main logo options',LOGO_PRESETS.mainLogo,['logo1','announcementLogo','officialPosterLogo','logo2','logo3','logo4'],['logo3']);
  html += logoSection('frp','FRP logo options',LOGO_PRESETS.frp,['frp1','frp2']);
  html += logoSection('agency','Agency / Guvern options',LOGO_PRESETS.agency,['agency1','agency2','agency3']);
  html += logoSection('fipa','FIPA logo options',LOGO_PRESETS.fipa,['fipaWhiteLogo']);
  html += logoSection('prima','Prima Sport logo options',LOGO_PRESETS.prima,['primaSportLogo']);
  html += detail('Extra images / logos', `${checkboxControl('extraAsset1.show', state.extraAsset1.show, 'Show extra image 1')}${uploadControl('extraAsset1','Upload extra image / logo 1')}${checkboxControl('extraAsset2.show', state.extraAsset2.show, 'Show extra image 2')}${uploadControl('extraAsset2','Upload extra image / logo 2')}<p class="note compact">Uploaded extra images appear centered by default. Click one in the preview to move or resize it.</p>`, false);
  html += detail('Help', '<p class="note compact">Single click selects an element. Click empty preview area to unselect. Double click text to edit it. Double click a logo to switch preset. In player cards and player profile cards, single click the photo area to open upload / replace. Use the left menu for move, zoom, and real crop from left / right / top / bottom. Exported files never show editor handles or pencil icons.</p>', false);
  return html; }
function enforceSingleOpenDetails(){ document.querySelectorAll('details.detailsBlock').forEach(d=>{ d.addEventListener('toggle',()=>{ if(!d.open) return; const scope=d.parentElement || document; scope.querySelectorAll('details.detailsBlock[open]').forEach(o=>{ if(o!==d && o.parentElement===d.parentElement) o.open=false; }); }); }); }
function buildForm(){ $('formHost').innerHTML = buildTemplateFields(); if($('quickFormats')) $('quickFormats').innerHTML = quickFormatButtons(); bindForm(); bindFlagPicker(); bindQuickFormats(); enforceSingleOpenDetails(); renderAssetShelf(); }
function bindForm(){
  document.querySelectorAll('[data-path]').forEach(el=>{
    const apply=()=>{ const path=el.dataset.path; let val; if(el.type==='checkbox') val=el.checked; else if(el.type==='range' || el.type==='number'){ val=parseFloat(el.value); if(Number.isNaN(val)) val=0; const mn=parseFloat(el.min), mx=parseFloat(el.max); if(!Number.isNaN(mn)) val=Math.max(mn,val); if(!Number.isNaN(mx)) val=Math.min(mx,val); el.value=val; } else val=el.value; setPath(path,val); updateMatchingInput(path,val); if(path==='format'){ applyResponsiveLayout(currentTemplate, val); if(currentTemplate==='player') syncPlayerBackgroundToFormat(); ensurePlayerEditableBoxes(); renderAssetShelf(); } if(path==='country'){ const match = FLAG_LIST.find(f => f.name.toLowerCase()===String(val).trim().toLowerCase()); if(match){ state.flagCode = match.code; state.flagName = match.name; state.countryAccent = countryAccentColorForCode(match.code); const url = flagUrl(match.code, 'w320'); fetch(url).then(r=>r.blob()).then(blob=>new Promise(resolve=>{ const reader=new FileReader(); reader.onload=()=>resolve(reader.result); reader.readAsDataURL(blob); })).then(dataUri=>{ imageStore.flag=dataUri; renderStage(); }).catch(()=>{ imageStore.flag=url; renderStage(); }); } } if(path.endsWith('.preset')){ const group=path.split('.')[0]; if(['mainLogo','frp','agency','fipa','prima'].includes(group)){ state[group].show = val !== 'none'; updateMatchingInput(`${group}.show`, state[group].show); } } if(path.endsWith('.show') && path.startsWith('extraAsset') && val && !imageStore[path.split('.')[0]]){ selectedKey = path.split('.')[0]; } if(el.type==='range' || el.type==='number'){ const box=el.parentElement?.querySelector('.rangeValue'); if(box) box.textContent = el.value + (el.dataset.suffix||''); } renderStage(); };
    el.addEventListener('input',apply); el.addEventListener('change',apply);
  });

  document.querySelectorAll('[data-country-select]').forEach(sel=>{
    sel.addEventListener('change',()=>{
      const name=sel.value; if(!name) return;
      const path=sel.dataset.countrySelect || 'country';
      setPath(path, name);
      const inp=document.querySelector(`[data-path="${path}"]`); if(inp) inp.value=name;
      const match = FLAG_LIST.find(f => f.name.toLowerCase()===String(name).trim().toLowerCase());
      if(match){
        state.flagCode = match.code; state.flagName = match.name; state.countryAccent = countryAccentColorForCode(match.code);
        const url = flagUrl(match.code, 'w320');
        fetch(url).then(r=>r.blob()).then(blob=>new Promise(resolve=>{ const reader=new FileReader(); reader.onload=()=>resolve(reader.result); reader.readAsDataURL(blob); })).then(dataUri=>{ imageStore.flag=dataUri; renderStage(); }).catch(()=>{ imageStore.flag=url; renderStage(); });
      } else renderStage();
    });
  });
  document.querySelectorAll('[data-image]').forEach(el=>{ el.addEventListener('change',e=>{ const file=e.target.files[0]; if(!file) return; const r=new FileReader(); r.onload=()=>{ imageStore[el.dataset.image]=r.result; if(['extraAsset1','extraAsset2'].includes(el.dataset.image)){ state[el.dataset.image].show = true; updateMatchingInput(`${el.dataset.image}.show`, true); selectedKey = el.dataset.image; buildForm(); } renderStage(); }; r.readAsDataURL(file); }); });
  document.querySelectorAll('[data-add-custom-text]').forEach(btn=>btn.addEventListener('click', addCustomText));
  document.querySelectorAll('[data-delete-custom-text]').forEach(btn=>btn.addEventListener('click',()=>removeCustomText(btn.dataset.deleteCustomText)));
  document.querySelectorAll('[data-select-custom-text]').forEach(btn=>btn.addEventListener('click',()=>{ selectedKey=btn.dataset.selectCustomText; renderStage(); buildForm(); }));
  document.querySelectorAll('[data-logo-group][data-logo-preset]').forEach(btn=>{ btn.addEventListener('click',()=>{ const group=btn.dataset.logoGroup; const preset=btn.dataset.logoPreset; if(!group || !preset || !state[group]) return; state[group].preset = preset; state[group].show = preset !== 'none'; updateMatchingInput(`${group}.preset`, preset); updateMatchingInput(`${group}.show`, state[group].show); selectedKey = group; renderStage(); buildForm(); }); });
}
function resetStateFor(template){ currentTemplate=template; state=clone(TEMPLATE_DEFAULTS[template]); ensureCustomTexts(); ensureCustomTexts(); ensureStyleDefaults(); ensureExtraAssets(); if((currentTemplate==='master' || currentTemplate==='announcement') && !state.backgroundPreset) state.backgroundPreset=recommendedMasterBg(state.format || 'landscape'); if(currentTemplate==='officialPoster' && !state.backgroundPreset) state.backgroundPreset=recommendedOfficialPosterBg(state.format || 'poster'); if(currentTemplate==='welcome' && !state.backgroundPreset) state.backgroundPreset=recommendedWelcomeBg(state.format || 'landscape'); if(currentTemplate==='country' && !state.backgroundPreset) state.backgroundPreset=recommendedCountryBg(state.format || 'landscape'); if(currentTemplate==='player') state.backgroundPreset = recommendedPlayerBg(state.format || 'landscape'); applyResponsiveLayout(currentTemplate, state.format); if(currentTemplate==='player') syncPlayerBackgroundToFormat(true); ensurePlayerEditableBoxes(); templateFormatMemory[currentTemplate] = {}; const formatsToInit = currentTemplate==='officialPoster' ? ['poster'] : FORMAT_KEYS; formatsToInit.forEach(fmt=>{ templateFormatMemory[currentTemplate][fmt] = makeDefaultStateForTemplateFormat(currentTemplate, fmt); }); selectedKey=null; interaction=null; rememberCurrentFormatState(); $('editorTitle').textContent = TEMPLATE_META[template].title; $('editorSubtitle').textContent = TEMPLATE_META[template].subtitle; }
function openEditor(template){ resetStateFor(template); $('menuScreen').classList.add('hidden'); $('editorScreen').classList.remove('hidden'); buildForm(); renderStage(); }
function measureTextBox(field){ const st=state.styles[field], text=state[field]||''; const [W,H]=dims(state.format); const basePx = H*(st.size/100); const lines = String(text).split('\n'); const longest = Math.max(...lines.map(l=>l.length),1); const maxW = W*(st.maxW||60)/100; const autoFit = Math.min(basePx, maxW / Math.max(longest*0.58,1)); const fontPx = Math.max(10, autoFit * (st.scale||1)); const lh=fontPx*1.1; const width=Math.max(...lines.map(l=>l.length*fontPx*0.58),10); const constrainedW = Math.min(width, W*0.95); const height=lines.length*lh; const xRef=W*st.x/100, yRef=H*st.y/100 - fontPx*0.85; let x=xRef; if(st.anchor==='middle') x -= constrainedW/2; if(st.anchor==='end') x -= constrainedW; return {x,y:yRef,width:constrainedW,height,fontPx,lh,lines,anchor:st.anchor}; }
function selectionOverlay(x,y,w,h,key, interactive=true, opts={}){ if(!interactive || selectedKey!==key) return ''; const showHandle = opts.showHandle !== false; const showPencil = opts.showPencil !== false; const pencilX = x-8; const pencilY = y-34; const eyeX = pencilX + 30; const eyeY = pencilY; const eyeMarkup = opts.showEye ? `<g data-eye="${key}"><rect x="${eyeX}" y="${eyeY}" width="24" height="24" rx="5" fill="#183a73" stroke="#fff" stroke-width="2"/><text x="${eyeX+12}" y="${eyeY+16}" text-anchor="middle" font-size="14" font-weight="900" fill="#ffffff">${opts.visible===false?'○':'◉'}</text></g>` : ''; const handleMarkup = showHandle ? `<circle cx="${x+w+8}" cy="${y+h+8}" r="8" fill="#3ce1ff" stroke="#fff" stroke-width="2" data-handle="${key}"/>` : ''; const pencilMarkup = showPencil ? `<g data-pencil="${key}"><rect x="${pencilX}" y="${pencilY}" width="24" height="24" rx="5" fill="#3ce1ff" stroke="#fff" stroke-width="2"/><text x="${pencilX+12}" y="${pencilY+16}" text-anchor="middle" font-size="14" font-weight="900" fill="#062449">✎</text></g>` : ''; return `<rect data-style="${key}" x="${x-8}" y="${y-8}" width="${w+16}" height="${h+16}" fill="none" stroke="#3ce1ff" stroke-width="3" stroke-dasharray="8 6"/>${handleMarkup}${pencilMarkup}${eyeMarkup}`; }
function textShadowFilter(id, st){ if(!st.shadow) return ''; return `<filter id="${id}" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="${st.shadowDx}" dy="${st.shadowDy}" stdDeviation="${st.shadowBlur}" flood-color="${st.shadowColor}"/></filter>`; }
function logoOutlineFilter(id, cfg){ if(!cfg.outline || cfg.outlineWidth<=0) return ''; const w=cfg.outlineWidth; const c=cfg.outlineColor; return `<filter id="${id}" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="${w}" dy="0" stdDeviation="0.45" flood-color="${c}"/><feDropShadow dx="-${w}" dy="0" stdDeviation="0.45" flood-color="${c}"/><feDropShadow dx="0" dy="${w}" stdDeviation="0.45" flood-color="${c}"/><feDropShadow dx="0" dy="-${w}" stdDeviation="0.45" flood-color="${c}"/><feDropShadow dx="${w}" dy="${w}" stdDeviation="0.45" flood-color="${c}"/><feDropShadow dx="-${w}" dy="${w}" stdDeviation="0.45" flood-color="${c}"/><feDropShadow dx="${w}" dy="-${w}" stdDeviation="0.45" flood-color="${c}"/><feDropShadow dx="-${w}" dy="-${w}" stdDeviation="0.45" flood-color="${c}"/></filter>`; }
function renderText(field, opts={}, interactive=true){ const st=state.styles[field]; const b=measureTextBox(field); const fill=st.gradient ? `url(#textgrad_${field})` : (opts.fill||'#fff'); const weight=st.fontWeight||opts.weight||900; const fontFamily=st.fontFamily||'Impact, Haettenschweiler, Arial Black, sans-serif'; const fontStyle=st.italic ? 'italic' : 'normal'; const anchor=st.anchor||'start'; const x = anchor==='middle'? b.x+b.width/2 : anchor==='end'? b.x+b.width : b.x; const strokeAttrs = st.outline ? `stroke="${st.outlineColor}" stroke-width="${st.outlineWidth}" paint-order="stroke"` : (opts.stroke?`stroke="${opts.stroke.color}" stroke-width="${opts.stroke.width}" paint-order="stroke"`:''); const filterAttr = st.shadow ? `filter="url(#textshadow_${field})"` : ''; let out=`<g data-style="${field}" data-field="${field}">`; b.lines.forEach((line,i)=>{ const y=b.y+b.fontPx+i*b.lh; out += `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${fill}" font-size="${b.fontPx}" font-family="${fontFamily}" font-style="${fontStyle}" font-weight="${weight}" ${strokeAttrs} ${filterAttr}>${esc(line)}</text>`; }); out += selectionOverlay(b.x,b.y,b.width,b.height,field,interactive); out += `</g>`; return out; }
function logoBox(group){ const cfg=state[group]; const [W,H]=dims(state.format); const width=W*(cfg.w/100); const ratio=getLogoRatio(group); const height=width/ratio; const x=W*(cfg.x/100)-width/2; const y=H*(cfg.y/100)-height/2; return {x,y,width,height}; }
function renderOptionalLogo(group, interactive=true){ return state[group] ? renderLogo(group, interactive) : ''; }
function renderLogo(group, interactive=true){ const cfg=state[group]; if(!cfg.show || cfg.preset==='none') return ''; const b=logoBox(group); const src=getLogoSrc(group); const filter = (cfg.outline && cfg.outlineWidth>0) ? `filter="url(#logooutline_${group})"` : ''; return `<g data-style="${group}"><image href="${src}" x="${b.x}" y="${b.y}" width="${b.width}" height="${b.height}" preserveAspectRatio="xMidYMid meet" ${filter}/>${selectionOverlay(b.x,b.y,b.width,b.height,group,interactive,{showEye:true,visible:true})}</g>`; }
function renderExtraAsset(key, interactive=true){ ensureExtraAssets(); const cfg=state[key]; const src=imageStore[key]; if(!cfg || !cfg.show || !src) return ''; const b=uploadedAssetBox(key); return `<g data-style="${key}"><image href="${src}" x="${b.x}" y="${b.y}" width="${b.width}" height="${b.height}" preserveAspectRatio="xMidYMid meet"/>${selectionOverlay(b.x,b.y,b.width,b.height,key,interactive,{showEye:true,visible:true})}</g>`; }
function countryAccentColor(){
  if(state.countryAccent) return state.countryAccent;
  const code = (state.flagCode || '').toLowerCase();
  const overrides = {ro:'#f3c739', md:'#f3c739', ao:'#d21034', ad:'#f7d117', fr:'#1e4fb8', it:'#1aa260', es:'#f1c232', de:'#f4c430', br:'#22a652', ar:'#60a5fa', us:'#d91e36', gb:'#d91e36'};
  if(overrides[code]) return overrides[code];
  const palette=['#f3c739','#e11d2b','#1e88e5','#20b15a','#f7f7f7','#ff7a18'];
  let h=0; for(const ch of code) h=(h*31+ch.charCodeAt(0))%997;
  return palette[h % palette.length];
}
function setCountryAccentFromCode(code){ state.countryAccent = countryAccentColorForCode(code); }
function countryAccentColorForCode(code){
  code = String(code || '').toLowerCase();
  const overrides = {ro:'#f3c739', md:'#f3c739', ao:'#d21034', ad:'#f7d117', fr:'#1e4fb8', it:'#1aa260', es:'#f1c232', de:'#f4c430', br:'#22a652', ar:'#60a5fa', us:'#d91e36', gb:'#d91e36'};
  if(overrides[code]) return overrides[code];
  const palette=['#f3c739','#e11d2b','#1e88e5','#20b15a','#f7f7f7','#ff7a18'];
  let h=0; for(const ch of code) h=(h*31+ch.charCodeAt(0))%997;
  return palette[h % palette.length];
}
function countryFlagPaletteForCode(code){
  code = String(code || '').toLowerCase();
  const map = {
    ro:['#002B7F','#FCD116','#CE1126'], md:['#003F87','#FFD100','#C8102E'], fr:['#0055A4','#FFFFFF','#EF4135'], it:['#009246','#FFFFFF','#CE2B37'],
    de:['#000000','#DD0000','#FFCE00'], es:['#AA151B','#F1BF00','#AA151B'], ar:['#74ACDF','#FFFFFF','#74ACDF'], br:['#009C3B','#FFDF00','#002776'],
    mx:['#006847','#FFFFFF','#CE1126'], nl:['#AE1C28','#FFFFFF','#21468B'], be:['#000000','#FCDD09','#EF3340'], ua:['#005BBB','#FFD500'],
    hu:['#CE2939','#FFFFFF','#477050'], pl:['#FFFFFF','#DC143C','#DC143C'], ie:['#169B62','#FFFFFF','#FF883E'], at:['#ED2939','#FFFFFF','#ED2939'],
    bg:['#FFFFFF','#00966E','#D62612'], hr:['#FF0000','#FFFFFF','#171796'], rs:['#C6363C','#0C4076','#FFFFFF'], si:['#FFFFFF','#0056A3','#D50000'],
    sk:['#FFFFFF','#0B4EA2','#EE1C25'], ru:['#FFFFFF','#0039A6','#D52B1E'], ee:['#4891D9','#000000','#FFFFFF'], lt:['#FDB913','#006A44','#C1272D'],
    lv:['#9E3039','#FFFFFF','#9E3039'], co:['#FCD116','#003893','#CE1126'], ec:['#FCD116','#003893','#CE1126'], ve:['#F4D900','#0033A0','#CF142B'],
    pe:['#D91023','#FFFFFF','#D91023'], cl:['#0039A6','#FFFFFF','#D52B1E'], uy:['#FFFFFF','#0038A8','#FFFFFF'], py:['#D52B1E','#FFFFFF','#0038A8'],
    bo:['#D52B1E','#F9E300','#007934'], am:['#D90012','#0033A0','#F2A800'], az:['#00B5E2','#EF3340','#509E2F'], tr:['#E30A17','#FFFFFF','#E30A17'],
    gr:['#0D5EAF','#FFFFFF','#0D5EAF'], pt:['#046A38','#DA291C','#FFCD00'], gb:['#012169','#FFFFFF','#C8102E'], us:['#B31942','#FFFFFF','#0A3161']
  };
  return map[code] || [countryAccentColorForCode(code), '#f7f7f7', '#173c8d'];
}
function countryFigureDefs(){
  if(currentTemplate!=='country') return '';
  const cfg = state.countryFigure || {};
  const preset = cfg.preset || 'countryFigure1';
  if(cfg.show===false || preset==='none') return '';
  const accent = countryAccentColor();
  const b = countryFigureBox();
  return `<filter id="countryfigure_glow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="${accent}" flood-opacity="0.42"/></filter><mask id="countryfigure_mask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" style="mask-type:alpha"><image href="${assetSrc(preset)}" x="${b.x}" y="${b.y}" width="${b.width}" height="${b.height}" preserveAspectRatio="xMidYMid meet"/></mask>`;
}
function countryFigureBox(){
  const cfg = state.countryFigure || {x:63.93,y:37.55,w:24.54};
  const [W,H]=dims(state.format);
  const width = W*((cfg.w ?? 24.54)/100);
  const ratio = assetRatio(cfg.preset || 'countryFigure1') || 1;
  const height = width/ratio;
  const x = W*((cfg.x ?? 63.93)/100) - width/2;
  const y = H*((cfg.y ?? 37.55)/100) - height/2;
  return {x,y,width,height};
}
function countryFigureFillMarkup(b){
  const code = String(state.flagCode || '').toLowerCase();
  const flagHref = imageStore.flag || (code ? flagUrl(code, 'w320') : '');
  if(flagHref) return `<image href="${flagHref}" x="${b.x}" y="${b.y}" width="${b.width}" height="${b.height}" preserveAspectRatio="none"/>`;
  const colors = countryFlagPaletteForCode(code);
  const bandW = b.width / Math.max(colors.length, 1);
  return colors.map((c,i)=>`<rect x="${b.x + bandW*i}" y="${b.y}" width="${i===colors.length-1 ? (b.width - bandW*i) : bandW}" height="${b.height}" fill="${c}"/>`).join('');
}
function renderCountryFigure(interactive=true){
  if(currentTemplate!=='country') return '';
  const cfg = state.countryFigure || {};
  const preset = cfg.preset || 'countryFigure1';
  if(cfg.show===false || preset==='none') return '';
  const b = countryFigureBox();
  const opacity = cfg.opacity ?? 0.88;
  return `<g data-style="countryFigure"><g opacity="${opacity}" filter="url(#countryfigure_glow)"><g mask="url(#countryfigure_mask)">${countryFigureFillMarkup(b)}</g></g><image href="${assetSrc(preset)}" x="${b.x}" y="${b.y}" width="${b.width}" height="${b.height}" preserveAspectRatio="xMidYMid meet" opacity=".14"/>${selectionOverlay(b.x,b.y,b.width,b.height,'countryFigure',interactive)}</g>`;
}
function renderFlag(href,x,y,w,h,key='flag',interactive=true){ if(!href) return photoChooserRect(key,x,y,w,h,4,'CHOOSE FLAG',interactive); const pad=Math.max(2, Math.min(w,h)*0.04); const rx=Math.max(3, Math.min(w,h)*0.08); return `<g data-photo="${key}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="rgba(10,29,68,.36)" stroke="rgba(255,255,255,.55)" stroke-width="2"/><image href="${href}" x="${x+pad}" y="${y+pad}" width="${w-pad*2}" height="${h-pad*2}" preserveAspectRatio="xMidYMid meet"/>${selectionOverlay(x,y,w,h,key,interactive)}</g>`; }
function romanianMiniFlag(x,y,w,h){ const band=w/3; const rx=Math.max(2, Math.min(w,h)*0.14); return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.55)" stroke-width="1.6"/><rect x="${x+1.5}" y="${y+1.5}" width="${band-1}" height="${h-3}" rx="${Math.max(1,rx-1)}" fill="#002B7F"/><rect x="${x+band}" y="${y+1.5}" width="${band}" height="${h-3}" fill="#FCD116"/><rect x="${x+band*2}" y="${y+1.5}" width="${band-1.5}" height="${h-3}" rx="${Math.max(1,rx-1)}" fill="#CE1126"/></g>`; }
function eventFlagPair(styleKey='date'){ const st=(state.styles&&state.styles[styleKey])||{}; const [w,h]=dims(state.format); const cx=w*((st.x ?? 50)/100); const cy=h*((st.y ?? 72)/100); const flagW=w*(state.format==='story'||state.format==='poster' ? 0.06 : 0.042); const flagH=flagW*0.62; const textW=w*Math.min(0.5, Math.max(0.26, ((st.maxW ?? 52)/100)*0.72)); const gap=w*0.012; const leftX=cx-(textW/2)-flagW-gap; const rightX=cx+(textW/2)+gap; const y=cy-flagH*0.58; return romanianMiniFlag(leftX,y,flagW,flagH)+romanianMiniFlag(rightX,y,flagW,flagH); }
function genericBackground(w,h){
  const bgKey = state.backgroundPreset || (state.format==='story' ? 'playerBgStory1' : state.format==='poster' ? 'playerBgStory1' : state.format==='square' ? 'playerBgSquare1' : state.format==='social' ? 'playerBgSquare1' : 'playerBg1');
  const bg = assetSrc(bgKey);
  return imageCover(bg,'genericbg',0,0,w,h,0)+`<rect width="${w}" height="${h}" fill="rgba(0,10,30,.32)"/>`;
}

function trueCropClipRect(base, cropLeft, cropRight, cropTop, cropBottom){
  const cl=Math.max(0,Math.min(90,Number(cropLeft||0)));
  const cr=Math.max(0,Math.min(90,Number(cropRight||0)));
  const ct=Math.max(0,Math.min(90,Number(cropTop||0)));
  const cb=Math.max(0,Math.min(90,Number(cropBottom||0)));
  const x=base.x + base.w*(cl/100);
  const y=base.y + base.h*(ct/100);
  const w=Math.max(1, base.w*(1-(cl+cr)/100));
  const h=Math.max(1, base.h*(1-(ct+cb)/100));
  return {x,y,w,h,rx:base.rx||0};
}
function imageFitInsideBox(box, zoom, scaleX, scaleY, offsetX, offsetY){
  const z=Math.max(0.1,Number(zoom||1));
  const sx=Math.max(0.1,Number(scaleX||1));
  const sy=Math.max(0.1,Number(scaleY||1));
  const iw=box.w*z*sx;
  const ih=box.h*z*sy;
  const ix=box.x+(box.w-iw)/2+box.w*(Number(offsetX||0)/100);
  const iy=box.y+(box.h-ih)/2+box.h*(Number(offsetY||0)/100);
  return {x:ix,y:iy,w:iw,h:ih};
}
function renderBioPhotoFrameOverlay(x,y,w,h){ return `<image href="${assetSrc('bioPhotoGoldFrame')}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="none"/>`; }
function renderBioPhoto(interactive=true){ ensureBioPhotoSettings(); const frame=bioPhotoFrameRect(state.format); const {x,y,w:bw,h:bh,rx}=frame; let s=''; if(!imageStore.playerPhoto){ s += photoChooserRect('playerPhoto',x,y,bw,bh,rx,'ADD IMAGE FROM MENU ON LEFT',interactive); s += renderBioPhotoFrameOverlay(x,y,bw,bh); if(interactive) s += selectionOverlay(x,y,bw,bh,'playerPhoto',interactive,{showHandle:false}); return s; } const img=imageFitInsideBox({x,y,w:bw,h:bh}, state.bioPhoto.photoZoom, state.bioPhoto.photoScaleX, state.bioPhoto.photoScaleY, state.bioPhoto.photoOffsetX, state.bioPhoto.photoOffsetY); const crop=trueCropClipRect({x,y,w:bw,h:bh,rx}, state.bioPhoto.cropLeft, state.bioPhoto.cropRight, state.bioPhoto.cropTop, state.bioPhoto.cropBottom); const clipId='biophoto_clip'; s += `<clipPath id="${clipId}"><rect x="${crop.x}" y="${crop.y}" width="${crop.w}" height="${crop.h}" rx="${crop.rx}"/></clipPath><g data-photo="playerPhoto" data-photoimage="playerPhoto"><image href="${imageStore.playerPhoto}" x="${img.x}" y="${img.y}" width="${img.w}" height="${img.h}" preserveAspectRatio="xMidYMid meet" clip-path="url(#${clipId})"/></g>`; s += renderBioPhotoFrameOverlay(x,y,bw,bh); if(interactive) s += selectionOverlay(x,y,bw,bh,'playerPhoto',interactive,{showHandle:false}); return s; }
function imageCover(href,id,x,y,w,h,rx=0){ return `<clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}"/></clipPath><image href="${href}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id})"/>`; }
function photoChooserRect(key,x,y,w,h,rx=0,label='CLICK TO CHOOSE PHOTO',interactive=true){ const sel=(interactive && selectedKey===key)?`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="none" stroke="#3ce1ff" stroke-width="4" stroke-dasharray="10 6"/>`:''; return `<g data-photo="${key}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="transparent" stroke="rgba(243,199,57,.6)" stroke-width="4"/><text x="${x+w/2}" y="${y+h/2}" text-anchor="middle" dominant-baseline="middle" fill="#fff" font-size="${Math.min(w,h)*0.05}" font-weight="800" opacity=".9">${label}</text>${sel}${interactive && selectedKey===key?selectionOverlay(x,y,w,h,key,interactive):''}</g>`; }
function playerFrameInnerRect(L){ const insetX=Math.max(10, L.frameW*0.09); const insetTop=Math.max(10, L.frameH*0.08); const insetBottom=Math.max(10, L.frameH*0.11); const baseX=L.frameX+insetX; const baseY=L.frameY+insetTop; const baseW=Math.max(20, L.frameW-insetX*2); const baseH=Math.max(20, L.frameH-insetTop-insetBottom); const scale=Math.max(0.5,Math.min(2.5,Number(state.playerCard?.frameScale||1))); const w=baseW*scale; const h=baseH*scale; const x=baseX-(w-baseW)/2; const y=baseY-(h-baseH)/2; return {x,y,w,h,rx:26}; }
function renderPlayerPhotoInFrame(L, interactive=true){ const inner=playerFrameInnerRect(L); if(!imageStore.playerPhoto) return photoChooserRect('playerPhoto',inner.x,inner.y,inner.w,inner.h,inner.rx,'ADD IMAGE FROM MENU ON LEFT',interactive); ensurePlayerEditableBoxes(); const img=imageFitInsideBox(inner, state.playerCard.photoZoom, state.playerCard.photoScaleX, state.playerCard.photoScaleY, state.playerCard.photoOffsetX, state.playerCard.photoOffsetY); const crop=trueCropClipRect(inner, state.playerCard.cropLeft, state.playerCard.cropRight, state.playerCard.cropTop, state.playerCard.cropBottom); const clipId='playerphoto_clip'; return `<clipPath id="${clipId}"><rect x="${crop.x}" y="${crop.y}" width="${crop.w}" height="${crop.h}" rx="${crop.rx}"/></clipPath><g data-photo="playerPhoto" data-photoimage="playerPhoto"><image href="${imageStore.playerPhoto}" x="${img.x}" y="${img.y}" width="${img.w}" height="${img.h}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})"/></g>`; }

function textGradientDef(id, st){ if(!st.gradient) return ''; return `<linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="${st.gradientStart || '#ffffff'}"/><stop offset="100%" stop-color="${st.gradientEnd || '#ffffff'}"/></linearGradient>`; }
function defsBlock(){ ensureCustomTexts(); let defs=''; Object.keys(state.styles||{}).forEach(k=>{ defs += textShadowFilter(`textshadow_${k}`, state.styles[k]); defs += textGradientDef(`textgrad_${k}`, state.styles[k]); }); defs += '<linearGradient id="eventgoldgrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ffde7a"/><stop offset="48%" stop-color="#f1bf34"/><stop offset="100%" stop-color="#d79f13"/></linearGradient>'; defs += '<linearGradient id="covergoldgrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f7dd8b"/><stop offset="55%" stop-color="#e4b741"/><stop offset="100%" stop-color="#c98f13"/></linearGradient>'; defs += logoOutlineFilter('logooutline_mainLogo', state.mainLogo); defs += logoOutlineFilter('logooutline_frp', state.frp); defs += logoOutlineFilter('logooutline_agency', state.agency); if(state.fipa) defs += logoOutlineFilter('logooutline_fipa', state.fipa); if(state.prima) defs += logoOutlineFilter('logooutline_prima', state.prima); defs += countryFigureDefs(); return `<defs>${defs}</defs>`; }
function generateSvg(interactive=true){ const [w,h]=dims(state.format); let s=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${defsBlock()}`;
  if(currentTemplate==='master'){ const bg=imageStore.photo || assetSrc(state.backgroundPreset || recommendedMasterBg(state.format || 'landscape')); s += imageCover(bg,'masterbg',0,0,w,h,0)+`<rect width="${w}" height="${h}" fill="rgba(0,10,30,.10)"/>`; s += renderLogo('mainLogo',interactive)+renderLogo('frp',interactive)+renderLogo('agency',interactive)+renderLogo('fipa',interactive)+renderLogo('prima',interactive)+renderText('headline',{fill:'url(#covergoldgrad)',weight:900},interactive)+renderText('hostedText',{fill:'#ffffff',weight:800},interactive)+renderText('hashtag',{fill:'url(#covergoldgrad)',weight:700},interactive)+renderText('agencySupportText',{fill:'#dbe8ff',weight:700},interactive)+renderExtraAsset('extraAsset1',interactive)+renderExtraAsset('extraAsset2',interactive); }
  if(currentTemplate==='announcement'){ const bg=imageStore.photo || assetSrc(state.backgroundPreset || recommendedAnnouncementBg(state.format || 'landscape')); s += imageCover(bg,'announcementbg',0,0,w,h,0)+`<rect width="${w}" height="${h}" fill="rgba(0,10,30,.10)"/>`; s += renderLogo('mainLogo',interactive)+renderLogo('frp',interactive)+renderLogo('agency',interactive)+renderLogo('fipa',interactive)+renderLogo('prima',interactive)+renderText('headline',{fill:'#ffffff',weight:900},interactive)+renderText('hostedText',{fill:'#ffffff',weight:850},interactive)+renderText('hashtag',{fill:'#f4f8ff',weight:700},interactive)+renderText('agencySupportText',{fill:'#eaf4ff',weight:700},interactive)+renderExtraAsset('extraAsset1',interactive)+renderExtraAsset('extraAsset2',interactive); }
  if(currentTemplate==='officialPoster'){ const bg=imageStore.posterBg || assetSrc(state.backgroundPreset || recommendedOfficialPosterBg(state.format || 'poster')); s += imageCover(bg,'officialposterbg',0,0,w,h,0); s += renderLogo('mainLogo',interactive)+renderText('welcomeLine',{fill:'#163d92',weight:900},interactive)+renderText('titleLines',{fill:'url(#eventgoldgrad)',weight:900},interactive)+renderText('subLine',{fill:'#ffffff',weight:900},interactive)+renderText('venue',{fill:'url(#eventgoldgrad)',weight:900},interactive)+renderText('date',{fill:'url(#eventgoldgrad)',weight:900},interactive)+renderText('website',{fill:'#163d92',weight:900},interactive)+renderText('hashtag',{fill:'#163d92',weight:900},interactive)+renderText('hostedText',{fill:'#163d92',weight:900},interactive)+renderLogo('frp',interactive)+renderLogo('agency',interactive)+renderExtraAsset('extraAsset1',interactive)+renderExtraAsset('extraAsset2',interactive); }
  if(currentTemplate==='welcome'){ const bg=imageStore.welcomeBg || assetSrc(state.backgroundPreset || recommendedWelcomeBg(state.format || 'landscape')); s += imageCover(bg,'welcomebg',0,0,w,h,0)+`<rect width="${w}" height="${h}" fill="rgba(0,10,30,.10)"/>`; s += renderLogo('mainLogo',interactive)+renderText('titleLines',{fill:'#ffffff',weight:900},interactive)+renderText('venue',{fill:'url(#eventgoldgrad)',weight:900},interactive)+eventFlagPair('date')+renderText('date',{fill:'#ffffff',weight:850},interactive)+renderText('website',{fill:'#ffffff',weight:700},interactive)+renderLogo('frp',interactive)+renderLogo('agency',interactive)+renderExtraAsset('extraAsset1',interactive)+renderExtraAsset('extraAsset2',interactive); }
  if(currentTemplate==='country'){
    const preset = state.backgroundPreset || recommendedCountryBg(state.format);
    const bg = imageStore.countryBg || assetSrc(countryBgAssetKey(preset, state.format));
    const accent=countryAccentColor();
    const ov=state.countryOverlay||{show:true,opacity:.16,x:63.93,y:37.55,w:24.54};
    const frame = countryFrameLayout(state.format,w,h);
    const frameX=frame.x, frameY=frame.y, frameW=frame.w, frameH=frame.h;
    const footerY=h*.835;
    const countryBox=measureTextBox('country');
    const isMainPreset = preset==='countryBgMain';
    s += imageCover(bg,'countrybg',0,0,w,h,0);
    if(isMainPreset){
      if(imageStore.photo){
        s += `<rect x="${frameX}" y="${frameY}" width="${frameW}" height="${frameH}" fill="rgba(5,14,40,${Math.max(0, Math.min(1, ov.opacity ?? .16))})"/>`;
        s += imageCover(imageStore.photo,'countryphoto',frameX,frameY,frameW,frameH,0);
        s += `<rect x="${frameX}" y="${frameY}" width="${frameW}" height="${frameH}" fill="rgba(3,14,44,.14)"/>`;
      } else if((ov.opacity ?? .16) > 0){
        s += `<rect x="${frameX}" y="${frameY}" width="${frameW}" height="${frameH}" fill="rgba(5,14,40,${Math.max(0, Math.min(1, ov.opacity ?? .16))*.32})"/>`;
      }
      s += renderLogo('mainLogo',interactive)+renderLogo('frp',interactive)+renderLogo('agency',interactive)+renderLogo('fipa',interactive)+renderLogo('prima',interactive)+renderText('titleLines',{fill:'#f3c739'},interactive);
      if(ov.show!==false){
        const fig = countryFigureBox();
        s += `<image href="${assetSrc(state.countryFigure?.preset || 'countryFigure1')}" x="${fig.x}" y="${fig.y}" width="${fig.width}" height="${fig.height}" preserveAspectRatio="xMidYMid meet" opacity="${Math.max(0.22, Math.min(0.6, (state.countryFigure?.opacity ?? 0.88)*0.55))}" style="filter: drop-shadow(0 0 10px ${accent});"/>`;
      }
      s += renderCountryFigure(interactive);
      s += renderText('country',{fill:'#ffffff'},interactive);
      s += renderText('footerTop',{fill:'#08265d'},interactive)+renderText('footerBottom',{fill:'#ffffff'},interactive)+renderText('hashtag',{fill:'#f3c739'},interactive)+renderExtraAsset('extraAsset1',interactive)+renderExtraAsset('extraAsset2',interactive);
    } else {
      s += `<rect width="${w}" height="${h}" fill="rgba(4,13,35,.22)"/><rect x="0" y="0" width="${w*.345}" height="${h}" fill="rgba(2,10,28,.56)"/>`;
      s += `<rect x="${frameX}" y="${frameY}" width="${frameW}" height="${frameH}" fill="rgba(3,14,44,${Math.max(0, Math.min(1, ov.opacity ?? .20))})" stroke="#c6a24a" stroke-width="4"/>`;
      if(imageStore.photo){ s += imageCover(imageStore.photo,'countryphoto',frameX,frameY,frameW,frameH,0); s += `<rect x="${frameX}" y="${frameY}" width="${frameW}" height="${frameH}" fill="rgba(3,14,44,.14)"/>`; }
      else { s += `<clipPath id="countrycourt_clip"><rect x="${frameX}" y="${frameY}" width="${frameW}" height="${frameH}"/></clipPath><image href="${assetSrc('teamCourt')}" x="${frameX+frameW*.11}" y="${frameY+frameH*.02}" width="${frameW*.74}" height="${frameH*.78}" preserveAspectRatio="xMidYMid meet" opacity=".92" clip-path="url(#countrycourt_clip)"/>`; }
      if(ov.show!==false){ const sw=w*(ov.w/100), sh=sw/assetRatio(state.countryFigure?.preset || 'countryFigure1'), sx=w*(ov.x/100)-sw/2, sy=h*(ov.y/100)-sh/2; s += `<image href="${assetSrc(state.countryFigure?.preset || 'countryFigure1')}" x="${sx}" y="${sy}" width="${sw}" height="${sh}" preserveAspectRatio="xMidYMid meet" opacity="${Math.max(0.24, Math.min(0.62, (state.countryFigure?.opacity ?? 0.88)*0.6))}" style="filter: drop-shadow(0 0 10px ${accent});"/>`; }
      s += `<rect x="${frameX}" y="${frameY}" width="${frameW}" height="${frameH}" fill="${accent}" opacity=".03"/>`;
      s += `<image href="${assetSrc('teamTrails')}" x="${w*.03}" y="${h*.43}" width="${w*.73}" height="${h*.26}" preserveAspectRatio="xMidYMid meet" opacity=".84"/>`;
      s += renderLogo('mainLogo',interactive)+renderLogo('frp',interactive)+renderLogo('agency',interactive)+renderLogo('fipa',interactive)+renderLogo('prima',interactive)+renderText('titleLines',{fill:'#f3c739'},interactive);
      s += renderCountryFigure(interactive);
      s += renderText('country',{fill:'#ffffff'},interactive);
      s += `<path d="M0 ${footerY} H${w*.60} L${w*.64} ${h*.905} H0 Z" fill="#d7af40" opacity=".98"/>`;
      s += `<path d="M${w*.21} ${h*.875} H${w*.61}" stroke="#f2c532" stroke-width="6" opacity=".98"/><path d="M${w*.39} ${h*.875} H${w*.625}" stroke="#e11d2b" stroke-width="6" opacity=".98"/>`;
      s += renderText('footerTop',{fill:'#08265d'},interactive)+renderText('footerBottom',{fill:'#ffffff'},interactive)+renderText('hashtag',{fill:'#f3c739'},interactive)+renderExtraAsset('extraAsset1',interactive)+renderExtraAsset('extraAsset2',interactive);
    }
  }
  if(currentTemplate==='player'){ const bg=imageStore.playerBg || assetSrc(state.backgroundPreset || recommendedPlayerBg(state.format)); const L=playerLayout(state.format,w,h); s += imageCover(bg,'playerbg',0,0,w,h,0)+`<rect width="${w}" height="${h}" fill="rgba(6,20,58,.16)"/>`; s += renderLogo('mainLogo',interactive)+renderLogo('frp',interactive)+renderLogo('agency',interactive)+renderLogo('fipa',interactive)+renderLogo('prima',interactive)+renderText('announcementLabel',{fill:'#f2f6ff'},interactive)+renderText('player',{fill:'#ffffff'},interactive)+renderText('country',{fill:'#ffffff'},interactive); s += renderFlag(imageStore.flag,L.flagX,L.flagY,L.flagW,L.flagH,'flag',interactive); s += renderPlayerPhotoInFrame(L, interactive); s += `<image href="${assetSrc('playerFrame1')}" x="${L.frameX}" y="${L.frameY}" width="${L.frameW}" height="${L.frameH}" preserveAspectRatio="xMidYMid meet"/>`; if(interactive) s += selectionOverlay(L.frameX,L.frameY,L.frameW,L.frameH,'playerPhoto',interactive,{showHandle:false,showPencil:false}); s += renderText('footerLines',{fill:'#ffffff'},interactive)+renderText('hashtag',{fill:'#ffffff'},interactive)+renderExtraAsset('extraAsset1',interactive)+renderExtraAsset('extraAsset2',interactive); }
  if(currentTemplate==='bio'){ s += genericBackground(w,h); s += renderBioPhoto(interactive); ensureBioInfoSettings(); ensurePlayerEditableBoxes(); const off=bioInfoOffsetPx(); const boxX=w*.06, boxY=h*.08, boxW=w*.42, boxH=h*.70; const flagW=w*((state.playerCard.flagW||10)/100), flagH=h*((state.playerCard.flagH||5)/100); const flagX=w*((state.playerCard.flagX||27)/100)-flagW/2, flagY=h*((state.playerCard.flagY||52)/100)-flagH/2; s += `<g transform="translate(${off.dx} ${off.dy})"><rect x="${boxX}" y="${boxY}" width="${boxW}" height="${boxH}" rx="26" fill="#071d43" opacity=".94" stroke="#f3c739" stroke-width="5"/>`+renderLogo('mainLogo',interactive)+renderLogo('frp',interactive)+renderLogo('agency',interactive)+renderLogo('fipa',interactive)+renderLogo('prima',interactive)+renderText('player',{fill:'#fff'},interactive)+renderText('country',{fill:'#f3c739'},interactive)+renderFlag(imageStore.flag,flagX,flagY,flagW,flagH,'flag',interactive)+renderText('sectionLabel',{fill:'#fff',weight:800},interactive)+renderText('bioText',{fill:'#d9e8ff',weight:600},interactive)+`</g>`; if(interactive) s += selectionOverlay(boxX+off.dx,boxY+off.dy,boxW,boxH,'bioInfoBox',interactive,{showHandle:false,showPencil:false}); s += renderText('footerLines',{fill:'#fff'},interactive)+renderText('hashtag',{fill:'#f3c739'},interactive)+renderExtraAsset('extraAsset1',interactive)+renderExtraAsset('extraAsset2',interactive); }
  s += renderCustomTexts(interactive);
  s += `</svg>`; return s; }

function gridOverlaySvg(w,h){
  if(!window.__padbolGridEnabled) return '';
  const majorX = w/4, minorX = w/8, majorY = h/4, minorY = h/8;
  let s = '<g class="previewGridOverlay" pointer-events="none" opacity="0.55">';
  for(let x=minorX; x<w; x+=minorX){ const major = Math.abs((x/majorX)-Math.round(x/majorX))<0.001; s += `<line class="gridLine" x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="${major?'#f3c739':'#ffffff'}" stroke-width="${major?2:1}" stroke-opacity="${major?0.55:0.22}" stroke-dasharray="${major?'':'7 7'}"/>`; }
  for(let y=minorY; y<h; y+=minorY){ const major = Math.abs((y/majorY)-Math.round(y/majorY))<0.001; s += `<line class="gridLine" x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="${major?'#f3c739':'#ffffff'}" stroke-width="${major?2:1}" stroke-opacity="${major?0.55:0.22}" stroke-dasharray="${major?'':'7 7'}"/>`; }
  s += `<line x1="${w/2}" y1="0" x2="${w/2}" y2="${h}" stroke="#3ce1ff" stroke-width="2" stroke-opacity=".7"/><line x1="0" y1="${h/2}" x2="${w}" y2="${h/2}" stroke="#3ce1ff" stroke-width="2" stroke-opacity=".7"/>`;
  s += '</g>';
  return s;
}
function syncGridToggle(){
  const cb = $('gridToggle');
  if(!cb) return;
  cb.checked = !!window.__padbolGridEnabled;
  cb.onchange = ()=>{ window.__padbolGridEnabled = cb.checked; localStorage.setItem('padbolGridEnabled', cb.checked ? '1' : '0'); renderStage(); };
}

function renderStage(){ const [w,h]=dims(state.format); $('stage').style.aspectRatio=`${w}/${h}`; const grid = gridOverlaySvg(w,h); $('stage').innerHTML=generateSvg(true).replace('</svg>', grid + '</svg>'); attachStageEvents(); syncGridToggle(); }
function nearestEditable(target){ while(target && target!==target.ownerSVGElement){ if(target.dataset && (target.dataset.style || target.dataset.handle || target.dataset.photo || target.dataset.photoimage || target.dataset.pencil || target.dataset.eye)) return target; target=target.parentNode; } return null; }
function syncSelectedInspector(){ buildForm(); setTimeout(()=>{ const el=$('selectedInspector'); if(el){ el.open=true; } }, 0); }
function promptLogoPreset(group){ const options=LOGO_PRESETS[group]; const msg=options.map((o,i)=>`${i+1}. ${o.label}`).join('\n'); const found=options.findIndex(o=>o.value===state[group].preset); const current=found>=0 ? found+1 : 1; const val=prompt(`Select ${group} option:\n${msg}`, current); if(val===null) return; const idx=parseInt(val,10)-1; if(options[idx]){ state[group].preset=options[idx].value; state[group].show = true; updateMatchingInput(`${group}.show`, true); updateMatchingInput(`${group}.preset`, options[idx].value); renderStage(); buildForm(); } }
function attachStageEvents(){
  const svg=$('stage').querySelector('svg');
  if(!svg) return;

  let clickTimer = null;
  const clearClickTimer = () => {
    if(clickTimer){ clearTimeout(clickTimer); clickTimer = null; }
  };

  const rectOfStage=()=>svg.getBoundingClientRect();
  const makeInteraction=(type,key,ev)=>{
    const r=rectOfStage();
    if(['mainLogo','frp','agency','fipa','prima'].includes(key)) return {type,key,orig:clone(state[key]),startX:ev.clientX,startY:ev.clientY,r,active:false};
    if(['playerPhoto','flag'].includes(key) && currentTemplate==='player'){ ensurePlayerEditableBoxes(); return {type,key,orig:clone(state.playerCard),startX:ev.clientX,startY:ev.clientY,r,active:false}; }
    if(key==='bioInfoBox' && currentTemplate==='bio'){ ensureBioInfoSettings(); return {type,key,orig:clone(state.bioInfo),startX:ev.clientX,startY:ev.clientY,r,active:false}; }
    if(key==='flag' && currentTemplate==='bio'){ ensurePlayerEditableBoxes(); return {type,key,orig:clone(state.playerCard),startX:ev.clientX,startY:ev.clientY,r,active:false}; }
    if(key==='playerPhoto' && currentTemplate==='bio'){ ensureBioPhotoSettings(); return {type,key,orig:clone(state.bioPhoto),startX:ev.clientX,startY:ev.clientY,r,active:false}; }
    if(['extraAsset1','extraAsset2'].includes(key)){ ensureExtraAssets(); return {type,key,orig:clone(state[key]),startX:ev.clientX,startY:ev.clientY,r,active:false}; }
    if(key==='countryFigure' && currentTemplate==='country'){ if(!state.countryFigure) state.countryFigure={show:true,preset:'countryFigure1',x:63.93,y:37.55,w:24.54,opacity:0.88}; return {type,key,orig:clone(state.countryFigure),startX:ev.clientX,startY:ev.clientY,r,active:false}; }
    if(state.styles && state.styles[key]) return {type,key,orig:clone(state.styles[key]),startX:ev.clientX,startY:ev.clientY,r,active:false};
    return null;
  };

  svg.onmousedown=(ev)=>{
    const n=nearestEditable(ev.target);
    if(!n){ return; }

    // Important: do not start/re-render selection during the second click of a double-click.
    // Re-rendering the SVG before dblclick fires is what made text editing unstable.
    if(ev.detail > 1) {
      interaction = null;
      return;
    }

    if(n.dataset.handle){
      selectedKey=n.dataset.handle;
      interaction=makeInteraction('resize',selectedKey,ev);
      ev.preventDefault();
      return;
    }
    if(n.dataset.photoimage && (currentTemplate==='player' || currentTemplate==='bio')){
      selectedKey='playerPhoto';
      interaction=makeInteraction('panImage',selectedKey,ev);
      ev.preventDefault();
      return;
    }
    if(n.dataset.style){
      selectedKey=n.dataset.style;
      if((currentTemplate==='player' || currentTemplate==='bio') && selectedKey==='playerPhoto'){
        interaction=makeInteraction((currentTemplate==='bio' && ev.shiftKey)?'moveBox':'panImage',selectedKey,ev);
        ev.preventDefault();
        return;
      }
      interaction=makeInteraction('move',selectedKey,ev);
      ev.preventDefault();
      return;
    }
    if(n.dataset.photo){
      selectedKey=n.dataset.photo;
      if((currentTemplate==='player' || currentTemplate==='bio') && selectedKey==='playerPhoto'){
        interaction=makeInteraction((currentTemplate==='bio' && ev.shiftKey)?'moveBox':'panImage',selectedKey,ev);
      } else {
        interaction=makeInteraction('move',selectedKey,ev);
      }
      ev.preventDefault();
    }
  };

  svg.onclick=(ev)=>{
    if(interaction && interaction.active) return;
    const n=nearestEditable(ev.target);
    if(!n){
      clearClickTimer();
      if(selectedKey!==null){
        selectedKey=null;
        buildForm();
        renderStage();
      }
      return;
    }

    if(n.dataset.eye){
      clearClickTimer();
      const key = n.dataset.eye;
      if(['mainLogo','frp','agency','fipa','prima'].includes(key)){
        state[key].show = !state[key].show;
        if(!state[key].show) state[key].preset = 'none';
        else if(state[key].preset==='none') state[key].preset = LOGO_PRESETS[key].find(o=>o.value!=='none')?.value || state[key].preset;
        updateMatchingInput(`${key}.show`, state[key].show);
        updateMatchingInput(`${key}.preset`, state[key].preset);
        renderStage();
        buildForm();
      } else if(['extraAsset1','extraAsset2'].includes(key)){
        state[key].show = !state[key].show;
        updateMatchingInput(`${key}.show`, state[key].show);
        renderStage();
        buildForm();
      }
      return;
    }

    // Delay single-click actions so a double-click can open edit mode without the
    // SVG being replaced between clicks.
    clearClickTimer();

    if(n.dataset.photo){
      const photoKey = n.dataset.photo;
      clickTimer = setTimeout(()=>{
        selectedKey=photoKey;
        buildForm();
        renderStage();
        if(photoKey==='flag'){ const picker=$('flagPicker'); if(picker){ picker.open=true; picker.scrollIntoView({behavior:'smooth', block:'start'}); } return; }
        const target=$('selectedInspector');
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
        if(photoKey==='playerPhoto'){ const input=document.querySelector(`[data-image="${photoKey}"]`); if(input) input.click(); return; }
        const hasImage = !!imageStore[photoKey];
        if(hasImage) return;
        const input=document.querySelector(`[data-image="${photoKey}"]`);
        if(input) input.click();
      }, 120);
      return;
    }

    if(n.dataset.pencil){
      const pencilKey = n.dataset.pencil;
      clickTimer = setTimeout(()=>{
        selectedKey=pencilKey;
        syncSelectedInspector();
        renderStage();
        const target=$('selectedInspector');
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      }, 120);
      return;
    }

    if(n.dataset.style){
      const styleKey = n.dataset.style;
      clickTimer = setTimeout(()=>{
        selectedKey=styleKey;
        renderStage();
        syncSelectedInspector();
      }, 190);
    }
  };

  svg.ondblclick=(ev)=>{
    clearClickTimer();
    interaction=null;
    const n=nearestEditable(ev.target);
    if(!n) return;
    ev.preventDefault();
    ev.stopPropagation();

    const photoKey = n.dataset.photo || n.dataset.photoimage;
    if(photoKey){
      selectedKey = photoKey;
      buildForm();
      renderStage();
      if(photoKey==='flag'){
        const picker=$('flagPicker');
        if(picker){ picker.open=true; picker.scrollIntoView({behavior:'smooth', block:'start'}); }
        return;
      }
      setTimeout(()=>{ const input=document.querySelector(`[data-image="${photoKey}"]`); if(input) input.click(); }, 0);
      return;
    }

    const key = n.dataset.style || n.dataset.field;
    if(!key) return;

    if(['mainLogo','frp','agency','fipa','prima'].includes(key)){
      selectedKey=key;
      promptLogoPreset(key);
      return;
    }

    if(state.styles && state.styles[key]){
      selectedKey=key;
      const val=prompt('Edit text', state[key] || '');
      if(val!==null){
        state[key]=val;
        updateMatchingInput(key,val);
        renderStage();
        buildForm();
      } else {
        renderStage();
      }
    }
  };

  svg.onwheel=(ev)=>{
    const hovered = nearestEditable(ev.target);
    if((!selectedKey || selectedKey!=='playerPhoto') && hovered && currentTemplate==='player' && (hovered.dataset.photo==='playerPhoto' || hovered.dataset.photoimage==='playerPhoto')){
      selectedKey = 'playerPhoto';
      buildForm();
    }
    if(!selectedKey) return;
    ev.preventDefault();
    const delta = ev.deltaY<0 ? 1 : -1;
    if(['mainLogo','frp','agency','fipa','prima'].includes(selectedKey)){
      state[selectedKey].w = Math.max(4, Math.min(40, +(state[selectedKey].w + delta*0.5).toFixed(2)));
      updateMatchingInput(`${selectedKey}.w`, state[selectedKey].w);
      renderStage();
    } else if(selectedKey==='playerPhoto' && currentTemplate==='player'){ ensurePlayerEditableBoxes(); state.playerCard.photoZoom=Math.max(0.3, Math.min(4, +(state.playerCard.photoZoom + delta*0.06).toFixed(2))); updateMatchingInput('playerCard.photoZoom', state.playerCard.photoZoom); renderStage(); } else if(selectedKey==='playerPhoto' && currentTemplate==='bio'){ ensureBioPhotoSettings(); state.bioPhoto.photoZoom=Math.max(0.3, Math.min(4, +(state.bioPhoto.photoZoom + delta*0.06).toFixed(2))); updateMatchingInput('bioPhoto.photoZoom', state.bioPhoto.photoZoom); renderStage(); } else if(['extraAsset1','extraAsset2'].includes(selectedKey)){ state[selectedKey].w=Math.max(4, Math.min(60, +(state[selectedKey].w + delta*0.8).toFixed(2))); updateMatchingInput(`${selectedKey}.w`, state[selectedKey].w); renderStage(); } else if(selectedKey==='countryFigure' && currentTemplate==='country'){ if(!state.countryFigure) state.countryFigure={show:true,preset:'countryFigure1',x:63.93,y:37.55,w:24.54,opacity:0.88}; state.countryFigure.w=Math.max(8, Math.min(60, +(state.countryFigure.w + delta*0.8).toFixed(2))); updateMatchingInput('countryFigure.w', state.countryFigure.w); renderStage(); } else if(state.styles[selectedKey]){
      state.styles[selectedKey].scale = Math.max(0.4, Math.min(3.5, +((state.styles[selectedKey].scale||1) + delta*0.05).toFixed(2)));
      updateMatchingInput(`styles.${selectedKey}.scale`, state.styles[selectedKey].scale);
      renderStage();
    }
  };

  window.onmousemove=(ev)=>{
    if(!interaction) return;
    const pixelDx=ev.clientX-interaction.startX;
    const pixelDy=ev.clientY-interaction.startY;
    if(!interaction.active && Math.hypot(pixelDx,pixelDy) < 6) return;

    clearClickTimer();
    interaction.active=true;
    const dx=pixelDx/interaction.r.width*100;
    const dy=pixelDy/interaction.r.height*100;

    if(['mainLogo','frp','agency','fipa','prima'].includes(interaction.key)){
      const cfg=state[interaction.key];
      if(interaction.type==='move'){
        cfg.x=Math.max(0,Math.min(100, +(interaction.orig.x+dx).toFixed(2)));
        cfg.y=Math.max(0,Math.min(100, +(interaction.orig.y+dy).toFixed(2)));
        updateMatchingInput(`${interaction.key}.x`, cfg.x);
        updateMatchingInput(`${interaction.key}.y`, cfg.y);
      } else {
        cfg.w=Math.max(4,Math.min(40, +(interaction.orig.w + dx).toFixed(2)));
        updateMatchingInput(`${interaction.key}.w`, cfg.w);
      }
    } else if(interaction.key==='playerPhoto' && currentTemplate==='player'){
      if(interaction.type==='move'){
        state.playerCard.frameX=Math.max(0,Math.min(100, +(interaction.orig.frameX+dx).toFixed(2)));
        state.playerCard.frameY=Math.max(0,Math.min(100, +(interaction.orig.frameY+dy).toFixed(2)));
        updateMatchingInput('playerCard.frameX', state.playerCard.frameX);
        updateMatchingInput('playerCard.frameY', state.playerCard.frameY);
      } else if(interaction.type==='panImage'){
        state.playerCard.photoOffsetX=Math.max(-100,Math.min(100, +(interaction.orig.photoOffsetX+dx).toFixed(2)));
        state.playerCard.photoOffsetY=Math.max(-100,Math.min(100, +(interaction.orig.photoOffsetY+dy).toFixed(2)));
        updateMatchingInput('playerCard.photoOffsetX', state.playerCard.photoOffsetX);
        updateMatchingInput('playerCard.photoOffsetY', state.playerCard.photoOffsetY);
      } else {
        state.playerCard.frameW=Math.max(6,Math.min(90, +(interaction.orig.frameW + dx).toFixed(2)));
        state.playerCard.frameH=Math.max(6,Math.min(90, +(interaction.orig.frameH + dy).toFixed(2)));
        updateMatchingInput('playerCard.frameW', state.playerCard.frameW);
        updateMatchingInput('playerCard.frameH', state.playerCard.frameH);
      }
    } else if(interaction.key==='bioInfoBox' && currentTemplate==='bio'){
      state.bioInfo.boxOffsetX=Math.max(-100,Math.min(100, +(interaction.orig.boxOffsetX+dx).toFixed(2)));
      state.bioInfo.boxOffsetY=Math.max(-100,Math.min(100, +(interaction.orig.boxOffsetY+dy).toFixed(2)));
      updateMatchingInput('bioInfo.boxOffsetX', state.bioInfo.boxOffsetX);
      updateMatchingInput('bioInfo.boxOffsetY', state.bioInfo.boxOffsetY);
    } else if(interaction.key==='playerPhoto' && currentTemplate==='bio'){
      if(interaction.type==='moveBox'){
        state.bioPhoto.boxOffsetX=Math.max(-100,Math.min(100, +(interaction.orig.boxOffsetX+dx).toFixed(2)));
        state.bioPhoto.boxOffsetY=Math.max(-100,Math.min(100, +(interaction.orig.boxOffsetY+dy).toFixed(2)));
        updateMatchingInput('bioPhoto.boxOffsetX', state.bioPhoto.boxOffsetX);
        updateMatchingInput('bioPhoto.boxOffsetY', state.bioPhoto.boxOffsetY);
      } else if(interaction.type==='panImage'){
        state.bioPhoto.photoOffsetX=Math.max(-100,Math.min(100, +(interaction.orig.photoOffsetX+dx).toFixed(2)));
        state.bioPhoto.photoOffsetY=Math.max(-100,Math.min(100, +(interaction.orig.photoOffsetY+dy).toFixed(2)));
        updateMatchingInput('bioPhoto.photoOffsetX', state.bioPhoto.photoOffsetX);
        updateMatchingInput('bioPhoto.photoOffsetY', state.bioPhoto.photoOffsetY);
      }
    } else if(interaction.key==='flag' && (currentTemplate==='player' || currentTemplate==='bio')){ if(interaction.type==='move'){ state.playerCard.flagX=Math.max(0,Math.min(100, +(interaction.orig.flagX+dx).toFixed(2))); state.playerCard.flagY=Math.max(0,Math.min(100, +(interaction.orig.flagY+dy).toFixed(2))); updateMatchingInput('playerCard.flagX', state.playerCard.flagX); updateMatchingInput('playerCard.flagY', state.playerCard.flagY); } else { state.playerCard.flagW=Math.max(4,Math.min(30, +(interaction.orig.flagW+dx).toFixed(2))); state.playerCard.flagH=Math.max(2,Math.min(20, +(interaction.orig.flagH+dy).toFixed(2))); updateMatchingInput('playerCard.flagW', state.playerCard.flagW); updateMatchingInput('playerCard.flagH', state.playerCard.flagH); }
    } else if(['extraAsset1','extraAsset2'].includes(interaction.key)){ const cfg=state[interaction.key]; if(interaction.type==='move'){ cfg.x=Math.max(0,Math.min(100, +(interaction.orig.x+dx).toFixed(2))); cfg.y=Math.max(0,Math.min(100, +(interaction.orig.y+dy).toFixed(2))); updateMatchingInput(`${interaction.key}.x`, cfg.x); updateMatchingInput(`${interaction.key}.y`, cfg.y); } else { cfg.w=Math.max(4,Math.min(60, +(interaction.orig.w+dx).toFixed(2))); updateMatchingInput(`${interaction.key}.w`, cfg.w); }
    } else if(interaction.key==='countryFigure' && currentTemplate==='country'){ const cfg=state.countryFigure; if(interaction.type==='move'){ cfg.x=Math.max(0,Math.min(100, +(interaction.orig.x+dx).toFixed(2))); cfg.y=Math.max(0,Math.min(100, +(interaction.orig.y+dy).toFixed(2))); updateMatchingInput('countryFigure.x', cfg.x); updateMatchingInput('countryFigure.y', cfg.y); } else { cfg.w=Math.max(8,Math.min(60, +(interaction.orig.w+dx).toFixed(2))); updateMatchingInput('countryFigure.w', cfg.w); }
    } else if(state.styles[interaction.key]) {
      const cfg=state.styles[interaction.key];
      if(interaction.type==='move'){
        cfg.x=Math.max(0,Math.min(100, +(interaction.orig.x+dx).toFixed(2)));
        cfg.y=Math.max(0,Math.min(100, +(interaction.orig.y+dy).toFixed(2)));
        updateMatchingInput(`styles.${interaction.key}.x`, cfg.x);
        updateMatchingInput(`styles.${interaction.key}.y`, cfg.y);
      } else {
        cfg.scale=Math.max(0.4,Math.min(3.5, +((interaction.orig.scale||1)+dx*0.03).toFixed(2)));
        updateMatchingInput(`styles.${interaction.key}.scale`, cfg.scale);
      }
    }
    renderStage();
  };

  window.onmouseup=()=>{
    interaction=null;
  };
}
function download(filename,text,mime){ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([text],{type:mime})); a.download=filename; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000); }
function downloadUrl(filename,url){ const a=document.createElement('a'); a.href=url; a.download=filename; a.click(); }

function showExportLoading(text="Preparing download..."){
  let overlay = document.getElementById("exportLoadingOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "exportLoadingOverlay";
    overlay.innerHTML = `
      <div class="export-loading-box">
        <div class="export-spinner"></div>
        <div id="exportLoadingText">Preparing download...</div>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  const label = document.getElementById("exportLoadingText");
  if (label) label.textContent = text;
  overlay.classList.add("active");
}

function hideExportLoading(){
  const overlay = document.getElementById("exportLoadingOverlay");
  if (overlay) overlay.classList.remove("active");
}

function waitFrame(){
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}

async function exportSvg(){
  try{
    showExportLoading("Preparing SVG download...");
    await waitFrame();
    rememberCurrentFormatState();
    let svg = generateSvg(false);

    if (typeof inlineSvgImages === "function") {
      svg = await inlineSvgImages(svg);
    }

    if (!svg.includes('xmlns="http://www.w3.org/2000/svg"')) {
      svg = svg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
    }

    if (!svg.includes('xmlns:xlink=')) {
      svg = svg.replace("<svg", '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }

    download(`padbol-${currentTemplate}-${state.format}.svg`, svg, "image/svg+xml;charset=utf-8");
  }catch(err){
    console.error("SVG export failed", err);
    alert("SVG export failed. Check console.");
  } finally {
    hideExportLoading();
  }
}

function fileToDataUrl(blob){
  return new Promise((resolve,reject)=>{
    const r=new FileReader();
    r.onload=()=>resolve(r.result);
    r.onerror=reject;
    r.readAsDataURL(blob);
  });
}

async function inlineSvgImages(svg){
  const urls=[...new Set([...svg.matchAll(/href="([^"]+)"/g)].map(m=>m[1]).filter(u=>u && !u.startsWith('data:') && !u.startsWith('#')))];
  for(const url of urls){
    try{
      const src = window.ASSET_DATA && window.ASSET_DATA[url] ? window.ASSET_DATA[url] : url;
      const res = await fetch(src);
      const data = await fileToDataUrl(await res.blob());
      svg = svg.split(`href="${url}"`).join(`href="${data}"`);
    }catch(e){
      console.warn('Could not inline image for export:', url, e);
    }
  }
  return svg;
}

async function svgToCanvas(){
  rememberCurrentFormatState();
  const [w,h]=dims(state.format);
  const svg=await inlineSvgImages(generateSvg(false));
  const blob=new Blob([svg],{type:'image/svg+xml;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const img=new Image();

  await new Promise((resolve,reject)=>{
    img.onload=resolve;
    img.onerror=reject;
    img.src=url;
  });

  const c=document.createElement('canvas');
  c.width=w;
  c.height=h;
  const ctx=c.getContext('2d');
  ctx.clearRect(0,0,w,h);
  ctx.drawImage(img,0,0,w,h);
  URL.revokeObjectURL(url);
  return c;
}

async function exportPng(){
  try{
    const c=await svgToCanvas();
    downloadUrl(`padbol-${currentTemplate}-${state.format}.png`, c.toDataURL('image/png'));
  }catch(err){
    console.error('PNG export failed', err);
    alert('PNG export failed. Check console.');
  }
}

async function exportJpg(){
  try{
    const c=await svgToCanvas();
    downloadUrl(`padbol-${currentTemplate}-${state.format}.jpg`, c.toDataURL('image/jpeg',0.95));
  }catch(err){
    console.error('JPG export failed', err);
    alert('JPG export failed. Check console.');
  }
}


async function exportPdf(){
  try{
    showExportLoading("Preparing high-quality PDF...");
    await waitFrame();
    rememberCurrentFormatState();

    const [w,h] = dims(state.format);
    let svgText = generateSvg(false);

    if (typeof inlineSvgImages === "function") {
      svgText = await inlineSvgImages(svgText);
    }

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
    const svgEl = svgDoc.documentElement;

    svgEl.setAttribute("width", w);
    svgEl.setAttribute("height", h);
    svgEl.setAttribute("viewBox", `0 0 ${w} ${h}`);

    const jsPDFClass = window.jspdf && window.jspdf.jsPDF;
    if (!jsPDFClass) {
      alert("PDF library not loaded. Refresh and try again.");
      return;
    }

    const pdf = new jsPDFClass({
      orientation: w >= h ? "landscape" : "portrait",
      unit: "px",
      format: [w, h],
      compress: true
    });

    const svg2pdfFn =
      (window.svg2pdf && window.svg2pdf.svg2pdf) ||
      window.svg2pdf;

    if (typeof svg2pdfFn === "function") {
      await svg2pdfFn(svgEl, pdf, {
        x: 0,
        y: 0,
        width: w,
        height: h
      });
      pdf.save(`padbol-${currentTemplate}-${state.format}.pdf`);
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = w * 3;
    canvas.height = h * 3;
    const ctx = canvas.getContext("2d");
    const blob = new Blob([svgText], {type:"image/svg+xml;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const img = new Image();

    await new Promise((resolve,reject)=>{
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    URL.revokeObjectURL(url);

    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, w, h);
    pdf.save(`padbol-${currentTemplate}-${state.format}.pdf`);
  }catch(err){
    console.error("PDF export failed", err);
    alert("PDF export failed. Open console for details.");
  } finally {
    hideExportLoading();
  }
}

function resetCurrentEditor(){ resetStateFor(currentTemplate); buildForm(); renderStage(); }
document.addEventListener('DOMContentLoaded',()=>{ window.__padbolGridEnabled = localStorage.getItem('padbolGridEnabled')==='1'; syncGridToggle(); $('menuLogo').src=assetSrc('logo1'); document.querySelectorAll('.menuCard').forEach(btn=>btn.addEventListener('click',()=>openEditor(btn.dataset.template))); $('backMenu').addEventListener('click',()=>{ $('editorScreen').classList.add('hidden'); $('menuScreen').classList.remove('hidden'); }); $('resetCurrent').addEventListener('click',resetCurrentEditor); $('exportPreset').addEventListener('click',exportPreset); $('importPreset').addEventListener('click',()=> $('presetFileInput').click()); $('presetFileInput').addEventListener('change',e=>{ importPresetFromFile(e.target.files[0]); e.target.value=''; }); $('exportSvg').addEventListener('click',exportSvg); $('exportPng').addEventListener('click',exportPng); });

document.addEventListener('DOMContentLoaded',()=>{
  const pngBtn=document.getElementById('exportPng');
  if(pngBtn && !document.getElementById('exportJpg')){
    const jpg=document.createElement('button');
    jpg.id='exportJpg';
    jpg.type='button';
    jpg.textContent='Export JPG';
    jpg.addEventListener('click',exportJpg);
    pngBtn.insertAdjacentElement('afterend',jpg);

    const pdf=document.createElement('button');
    pdf.id='exportPdf';
    pdf.type='button';
    pdf.textContent='Export PDF';
    pdf.addEventListener('click',exportPdf);
    jpg.insertAdjacentElement('afterend',pdf);
  }
});

// FORCE DEFAULT COUNTRY CONFIRMED LAYOUT
(function(){
  const countryConfirmedDefaults = {
    landscape: {
      format:'landscape',
      backgroundPreset:'countryBgMain',
      titleLines:'TEAM\nCONFIRMED',
      country:'Libya',
      footerTop:'PADBOL WORLD CUP ROMANIA 2026',
      footerBottom:'SEE YOU IN ROMANIA',
      hashtag:'#RomaniaWelcomesTheWorld',
      styles:{
        titleLines:{x:14.99,y:46.44,size:6.2,scale:1.29,anchor:'middle',maxW:24,gradient:true,gradientStart:'#b78723',gradientEnd:'#f7dd8b',outline:true,outlineWidth:1.3,outlineColor:'#1d1203',shadow:true,shadowDx:.65,shadowDy:.85,shadowBlur:1.7,shadowColor:'#0c0b10'},
        country:{x:68.5,y:76.3,size:8.8,scale:1,anchor:'middle',maxW:54,outline:true,outlineWidth:2.6,outlineColor:'#b78628',shadow:true,shadowDx:.7,shadowDy:.9,shadowBlur:1.9,shadowColor:'#0c0b10'},
        footerTop:{x:4.8,y:89.56,size:4,scale:1,anchor:'start',maxW:48},
        footerBottom:{x:4.8,y:95.5,size:4.8,scale:1,anchor:'start',maxW:42},
        hashtag:{x:95.59,y:79.36,size:3,scale:1,anchor:'end',maxW:34,gradient:true,gradientStart:'#b78723',gradientEnd:'#f7dd8b',shadow:true,shadowDx:.5,shadowDy:.6,shadowBlur:1.2,shadowColor:'#051127'}
      },
      mainLogo:{preset:'logo1',useCustom:false,show:true,x:15.14,y:21.27,w:26.69,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
      countryOverlay:{show:true,opacity:.16,x:63.93,y:37.55,w:24.54},
      countryFigure:{show:true,preset:'countryFigure1',x:48.65,y:49.18,w:24.54,opacity:.88},
      frp:{preset:'frp1',useCustom:false,show:true,x:70.82,y:91.31,w:10.89,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
      agency:{preset:'agency3',useCustom:false,show:true,x:87.28,y:89.49,w:18.32,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
      fipa:{preset:'fipaWhiteLogo',useCustom:false,show:false,x:92,y:12,w:14,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
      prima:{preset:'primaSportLogo',useCustom:false,show:false,x:87,y:84,w:15,outline:false,outlineWidth:0,outlineColor:'#ffffff'},
      customTexts:[],
      flagCode:'ly',
      flagName:'Libya',
      countryAccent:'#f7f7f7'
    }
  };

  countryConfirmedDefaults.square = deepMerge(clone(countryConfirmedDefaults.landscape), {
    format:'square',
    styles:{
      titleLines:{x:49.07,y:41.73,size:5.4,scale:1.38},
      country:{x:49.75,y:71.78,size:7.7,scale:1.1},
      footerTop:{x:6.99,y:90.21,size:3},
      footerBottom:{x:50,y:79.66,size:4,anchor:'middle',maxW:66},
      hashtag:{x:95,y:95.2,size:2.35}
    },
    mainLogo:{x:48.76,y:27.52,w:26.96},
    countryFigure:{x:27.64,y:54.97,w:25.2},
    frp:{show:true,x:78.46,y:8.47,w:17.15},
    agency:{show:true,preset:'agency1',x:29.13,y:8.21,w:30.43}
  });

  countryConfirmedDefaults.story = deepMerge(clone(countryConfirmedDefaults.landscape), {
    format:'story',
    styles:{
      titleLines:{x:50.23,y:19.38,size:4.2,scale:.86,maxW:42},
      country:{x:4.01,y:84.43,size:6.2,scale:1.38,anchor:'start',maxW:92,outlineWidth:1.6,outlineColor:'#ffffff',gradient:true,gradientStart:'#153d92',gradientEnd:'#2a66c9',shadowColor:'#102246'},
      footerTop:{x:4.4,y:90.6,size:2.55,maxW:74},
      footerBottom:{x:4.4,y:95,size:3.35,maxW:78},
      hashtag:{x:95,y:96.3,size:2.15,maxW:42,gradientStart:'#153d92',gradientEnd:'#2a66c9'}
    },
    mainLogo:{x:50,y:13.2,w:31.5},
    countryFigure:{x:40.78,y:43.18,w:49.73},
    frp:{show:false},
    agency:{show:false}
  });

  countryConfirmedDefaults.social = deepMerge(clone(countryConfirmedDefaults.landscape), {
    format:'social',
    styles:{
      titleLines:{x:73.66,y:19.23,size:5,scale:1,maxW:28},
      country:{x:32.34,y:72.86,size:6.8,scale:1.2,maxW:42},
      footerTop:{x:8,y:88.6,size:3,maxW:58},
      footerBottom:{x:8,y:94,size:4,maxW:58},
      hashtag:{x:95,y:92.5,size:2.45,maxW:38}
    },
    mainLogo:{x:22.89,y:24.64,w:26},
    countryFigure:{x:40.78,y:43.18,w:49.73},
    frp:{show:false},
    agency:{show:false}
  });

  countryConfirmedDefaults.poster = deepMerge(clone(countryConfirmedDefaults.landscape), {
    format:'poster',
    styles:{
      titleLines:{x:50,y:20.8,size:4,scale:.9,maxW:42},
      country:{x:4.2,y:84.2,size:6.5,scale:1.24,anchor:'start',maxW:90,outlineWidth:1.5,outlineColor:'#ffffff',gradient:true,gradientStart:'#153d92',gradientEnd:'#2a66c9',shadowColor:'#102246'},
      footerTop:{x:4.8,y:90.3,size:2.55,maxW:72},
      footerBottom:{x:4.8,y:94.8,size:3.35,maxW:78},
      hashtag:{x:95,y:96,size:2.05,maxW:42,gradientStart:'#153d92',gradientEnd:'#2a66c9'}
    },
    mainLogo:{x:50,y:12.8,w:28.2},
    countryFigure:{x:39.5,y:43.8,w:48},
    frp:{show:false},
    agency:{show:false}
  });

  TEMPLATE_DEFAULTS.country = clone(countryConfirmedDefaults.landscape);
  RESPONSIVE_PRESETS.country = countryConfirmedDefaults;
  templateFormatMemory.country = clone(countryConfirmedDefaults);
})();
