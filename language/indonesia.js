exports.private = () =>{
	return`Hanya Bisa Digunakan Di Private Chat\n_*One Botz-MD*_`
	}
exports.wait = () => {
    return `Memproses.. Mohon Di Tunggu\n_*One Botz-MD*_`
}
exports.ok = () => {
    return `Done\n_*One Botz-MD*_`
}

exports.err = () => {
    return `Fitur Sedang Error :/\n_*One Botz-MD*_`
}
exports.erorLink = () => {
    return `Link Error Atau Salah\n_One Botz-MD*_`
}
exports.media = () => {
    return `Pilih Media Yang Akan Di Kirim`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}\n_*One Botz-MD*_`
}

exports.wrongFormat = (prefix) => {
    return `Format Yang Kamu Kirim Salah, Coba Periksa Di ${prefix}allmenu\n_*One Botz-MD*_`
}

exports.emptyMess = () => {
    return `Masukin Pesan Yang Ingin Di Sampaikan\n*_One Botz-MD_*`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Fitur ${cmd} Tidak Ada Di ${prefix}allmenu\n*_One Botz-MD_*`
}

exports.ownerOnly = () => {
    return `Anda Bukan Owner\n*_One Botz-MD*_`
}

exports.doneOwner = () => {
    return `Done`
}

exports.groupOnly = () => {
    return `Gunakan Ini Di Grup\n_*One Botz-MD*_`
}

exports.adminOnly = () => {
    return `Kamu Admin?\n๐คจ๐ธ`
}

exports.nhFalse = () => {
    return `Coba Lagi Karena Kode Salah\n_*One Botz-MD*_`
}

exports.listBlock = (blockNumber) => {
    return `*โโ ใ HALL OF SHAME ใโโโฌฃ โโ*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `User Bukan Admin\n*_One Botz-MD*_`
}

exports.adminAlready = () => {
    return `Dia Sudah Admin Dari Dulu..`
}

exports.botNotAdmin = () => {
    return `Jadiin Gweh Admin Banh..`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran Filenya Terlalu Gede..`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai ${pushname} Selamat ${salam}\nSaya One Botz-MD. Semenjak WhatsApp Sudah Update, One Botz Mengikuti Update Dari WhatsApp\n_Mark Autis_
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*โTime: ${time}*
*๐ List-Menu One Botz-Md :*

โโโใ Bot Info ใโโโฌฃ 
โโฌก ${prefix}owner
โโฌก ${prefix}rules
โโฌก ${prefix}sc
โโฌก ${prefix}ping
โโฌก ${prefix}runtime
โโฌก ${prefix}botstatus
โโโฌฃ ${prefix}donate


โโโใ Owner ใโโโฌฃ 
โโฌก < evaluate
โโฌก > evaluate
โโฌก $ exec
โโฌก => exec
โโฌก ${prefix}setmenu [query]
โโฌก ${prefix}setmenu templateLocation
โโฌก ${prefix}setmenu templateTenor
โโฌก ${prefix}setmenu katalog
โโฌก ${prefix}setmenu katalog2
โโฌก ${prefix}setmenu list
โโฌก ${prefix}setwm packname|author
โโฌก ${prefix}sendsesi
โโฌก ${prefix}listpc
โโฌก ${prefix}listgc
โโฌก ${prefix}broadcast [text]
โโฌก ${prefix}bc [text]
โโฌก ${prefix}bcgc [text]
โโฌก ${prefix}nsfw [on/off]
โโฌก ${prefix}mute [on/off]
โโฌก ${prefix}banchat
โโฌก ${prefix}unbanchat
โโฌก ${prefix}autorespond [on/off]
โโฌก ${prefix}antiviewonce [on/off]
โโฌก ${prefix}join [link]
โโฌก ${prefix}self
โโฌก ${prefix}public [only bot]
โโฌก ${prefix}del [reply pesan bot]
โโโฌฃ ${prefix}setppbot [reply image]

โโโใ Store Menu ใโโโฌฃ
โโฌก ${prefix}list
โโฌก ${prefix}addlist [key|respond]
โโฌก ${prefix}dellist [key]
โโฌก ${prefix}update [key|respond]
โโฌก ${prefix}store
โโฌก ${prefix}kali
โโฌก ${prefix}bagi
โโฌก ${prefix}tambah
โโฌก ${prefix}kurang
โโฌก ${prefix}kalkulator
โโฌก ${prefix}proses
โโโฌฃ ${prefix}done [surah|ayat]


โโโใ Database ใโโโฌฃ 
โโฌก ${prefix}setcmd [reply stiker]
โโฌก ${prefix}delcmd [reply stiker]
โโฌก ${prefix}listcmd
โโฌก ${prefix}absen
โโฌก ${prefix}cekabsen
โโฌก ${prefix}deleteabsen
โโฌก ${prefix}absenstart
โโฌก ${prefix}addmsg [nama file]
โโฌก ${prefix}getmsg [nama file]
โโฌก ${prefix}listmsg
โโโฌฃ ${prefix}delmsg [nama file]


โโโใ Group ใโโโฌฃ 
โโฌก ${prefix}listonline
โโฌก ${prefix}sider
โโฌก ${prefix}wm packname|author
โโฌก ${prefix}infochat
โโฌก ${prefix}setdesk [text]
โโฌก ${prefix}setppgrup [reply image]
โโฌก ${prefix}antilink [on/off]
โโฌก ${prefix}revoke
โโฌก ${prefix}leave
โโฌก ${prefix}add [62***]
โโฌก ${prefix}kick @tag
โโฌก ${prefix}leave
โโฌก ${prefix}linkgc
โโฌก ${prefix}take packname|author
โโฌก ${prefix}group [open/close]
โโฌก ${prefix}tagall [text]
โโโฌฃ ${prefix}hidetag [text]

โโโใ Anime ใโโโฌฃ 
โโฌก ${prefix}quotesanime
โโฌก ${prefix}anime [query]
โโฌก ${prefix}manga [query]
โโโฌฃ ${prefix}character [query]

โโโใ Tag ใโโโฌฃ 
โโฌก ${prefix}stickertag
โโฌก ${prefix}videotag [query]
โโฌก ${prefix}vntag [query]
โโโฌฃ ${prefix}imagetag [query]

โโโใ Stalking ใโโโฌฃ 
โโฌก ${prefix}igstalk [username]
โโฌก ${prefix}ghstalk [username]
โโโฌฃ ${prefix}ytstalk [channel]


โโโใ Search ใโโโฌฃ 
โโฌก ${prefix}ytsearch [query]
โโฌก ${prefix}wallpaper [query]
โโฌก ${prefix}google [query]
โโฌก ${prefix}wikimedia [query]
โโฌก ${prefix}hentai
โโฌก ${prefix}wattpad [query]
โโฌก ${prefix}webtoons [query]
โโฌก ${prefix}drakor [query]
โโโฌฃ ${prefix}pinterest [query]


โโโใ Converter ใโโโฌฃ
โโฌก ${prefix}toaudio [video]
โโฌก ${prefix}tomp3 [video]
โโฌก ${prefix}tovn [video]
โโฌก ${prefix}stiker [reply image]
โโฌก ${prefix}tourl [image/video/stiker]
โโฌก ${prefix}togif [sticker]
โโฌก ${prefix}tomp4 [sticker]
โโโฌฃ${prefix}toimg [reply sticker]


โโโใ Image Effect ใโโโฌฃ 
โโฌก ${prefix}wanted [reply image/stiker]
โโฌก ${prefix}utatoo [reply image/stiker]
โโฌก ${prefix}unsharpen [reply image/stiker]
โโฌก ${prefix}thanos [reply image/stiker]
โโฌก ${prefix}sniper [reply image/stiker]
โโฌก ${prefix}sharpen [reply image/stiker]
โโฌก ${prefix}sepia [reply image/stiker]
โโฌก ${prefix}scary [reply image/stiker]
โโฌก ${prefix}rip [reply image/stiker]
โโฌก ${prefix}redple [reply image/stiker]
โโฌก ${prefix}rejected [reply image/stiker]
โโฌก ${prefix}posterize [reply image/stiker]
โโฌก ${prefix}ps4 [reply image/stiker]
โโฌก ${prefix}pixelize [reply image/stiker]
โโฌก ${prefix}missionpassed [reply image/stiker]
โโฌก ${prefix}moustache [reply image/stiker]
โโฌก ${prefix}lookwhatkarenhave [reply image/stiker]
โโฌก ${prefix}jail [reply image/stiker]
โโฌก ${prefix}invert [reply image/stiker]
โโฌก ${prefix}instagram [reply image/stiker]
โโฌก ${prefix}greyscale [reply image/stiker]
โโฌก ${prefix}glitch [reply image/stiker]
โโฌก ${prefix}gay [reply image/stiker]
โโฌก ${prefix}frame [reply image/stiker]
โโฌก ${prefix}fire [reply image/stiker]
โโฌก ${prefix}distort [reply image/stiker]
โโฌก ${prefix}dictator [reply image/stiker]
โโฌก ${prefix}deepfry [reply image/stiker]
โโฌก ${prefix}ddungeon [reply image/stiker]
โโฌก ${prefix}circle [reply image/stiker]
โโฌก ${prefix}challenger [reply image/stiker]
โโฌก ${prefix}burn [reply image/stiker]
โโฌก ${prefix}brazzers [reply image/stiker]
โโโฌฃ ${prefix}beautiful [reply image/stiker]


โโโใ Sticker Effect ใโโโฌฃ 
โโฌก ${prefix}jail [reply image/stiker]
โโฌก ${prefix}red [reply image/stiker]
โโฌก ${prefix}gay [reply image/stiker]
โโฌก ${prefix}bloo [reply image/stiker]
โโฌก ${prefix}blue [reply image/stiker]
โโฌก ${prefix}sepia [reply image/stiker]
โโฌก ${prefix}green [reply image/stiker]
โโฌก ${prefix}glass [reply image/stiker]
โโฌก ${prefix}invert [reply image/stiker]
โโฌก ${prefix}blurple [reply image/stiker]
โโฌก ${prefix}blurple2 [reply image/stiker]
โโฌก ${prefix}wasted [reply image/stiker]
โโฌก ${prefix}passed [reply image/stiker]
โโฌก ${prefix}triggered [reply image/stiker]
โโฌก ${prefix}comrade [reply image/stiker]
โโฌก ${prefix}greyscale [reply image/stiker]
โโฌก ${prefix}threshold [reply image/stiker]
โโฌก ${prefix}brightness [reply image/stiker]
โโโฌฃ ${prefix}invertgreyscale [reply image/stiker]


โโโใ Download ใโโโฌฃ 
โโฌก ${prefix}tiktok [link]
โโฌก ${prefix}tiktoknowm [link]
โโฌก ${prefix}tiktokwm [link]
โโฌก ${prefix}tiktokaudio [link]
โโฌก ${prefix}ytdl [link]
โโฌก ${prefix}play [query]
โโฌก ${prefix}ytmp3 [link]
โโฌก ${prefix}ytshortmp3 [link]
โโฌก ${prefix}ytmp4 [link]
โโฌก ${prefix}ytshorts [link]
โโฌก ${prefix}facebook [link]
โโฌก ${prefix}facebooksd [link]
โโฌก ${prefix}facebookhd [link]
โโฌก ${prefix}fbaudio [link]
โโฌก ${prefix}igstory [username]
โโฌก ${prefix}igdl [link]
โโฌก ${prefix}igphoto [link]
โโฌก ${prefix}igvideo [link]
โโฌก ${prefix}igreels [link]
โโฌก ${prefix}igtv [link]
โโฌก ${prefix}soundcloud [link]
โโฌก ${prefix}gitclone [link repo]
โโฌก ${prefix}gitrepo [username repo branch]
โโฌก ${prefix}mediafire [link]
โโโฌฃ ${prefix}twitter link

โโโใ Primbon ใโโโฌฃ
โโฌก ${prefix}nomorhoki 887435047326
โโฌก ${prefix}artimimpi [query]
โโฌก ${prefix}artinama [query]
โโฌก ${prefix}ramaljodoh
โโฌก ${prefix}ramaljodohbali
โโฌก ${prefix}suamiistri
โโฌก ${prefix}ramalcinta
โโฌก ${prefix}cocoknama
โโฌก ${prefix}pasangan
โโฌก ${prefix}jadiannikah
โโฌก ${prefix}sifatusaha
โโฌก ${prefix}rezeki
โโฌก ${prefix}pekerjaan
โโฌก ${prefix}nasib
โโฌก ${prefix}penyakit
โโฌก ${prefix}tarot
โโฌก ${prefix}fengshui
โโฌก ${prefix}haribaik
โโฌก ${prefix}harisangar
โโฌก ${prefix}harisial
โโฌก ${prefix}nagahari
โโฌก ${prefix}arahrezeki
โโฌก ${prefix}peruntungan
โโฌก ${prefix}weton
โโฌก ${prefix}karakter
โโฌก ${prefix}keberuntungan
โโฌก ${prefix}memancing
โโฌก ${prefix}masasubur
โโฌก ${prefix}zodiak 
โโโฌฃ ${prefix}shio [query]

โโโใ Random Anime ใโโโฌฃ
โโฌก ${prefix}loli
โโฌก ${prefix}neko
โโฌก ${prefix}waifu
โโฌก ${prefix}shinobu
โโฌก ${prefix}megumin
โโฌก ${prefix}bully
โโฌก ${prefix}cuddle
โโฌก ${prefix}cry
โโฌก ${prefix}hug
โโฌก ${prefix}awoo
โโฌก ${prefix}kiss
โโฌก ${prefix}lick
โโฌก ${prefix}pat
โโฌก ${prefix}smug
โโฌก ${prefix}bonk
โโฌก ${prefix}yeet
โโฌก ${prefix}blush
โโฌก ${prefix}smile
โโฌก ${prefix}wave
โโฌก ${prefix}highfive
โโฌก ${prefix}handhold
โโฌก ${prefix}nom
โโฌก ${prefix}bite
โโฌก ${prefix}glomp
โโฌก ${prefix}slap
โโฌก ${prefix}kill
โโฌก ${prefix}happy
โโฌก ${prefix}wink
โโฌก ${prefix}poke
โโฌก ${prefix}dance
โโโฌฃ ${prefix}cringe

โโโใ Nsfw & Sfw ใโโโฌฃ
โโฌก ${prefix}ahegao
โโฌก ${prefix}ass
โโฌก ${prefix}bdsm
โโฌก ${prefix}blowjob
โโฌก ${prefix}cuckold
โโฌก ${prefix}cum
โโฌก ${prefix}ero
โโฌก ${prefix}femdom
โโฌก ${prefix}foot
โโฌก ${prefix}gangbang
โโฌก ${prefix}glasses
โโฌก ${prefix}jahy
โโฌก ${prefix}manga
โโฌก ${prefix}masturbation
โโฌก ${prefix}neko
โโฌก ${prefix}orgy
โโฌก ${prefix}panties
โโฌก ${prefix}pussy
โโฌก ${prefix}tentacles
โโฌก ${prefix}thighs
โโฌก ${prefix}yuri
โโฌก ${prefix}feet
โโฌก ${prefix}lewdkemo
โโฌก ${prefix}woof
โโฌก ${prefix}gasm
โโฌก ${prefix}solo
โโฌก ${prefix}8ball
โโฌก ${prefix}goose
โโฌก ${prefix}avatar
โโฌก ${prefix}hololewd
โโฌก ${prefix}gecg
โโฌก ${prefix}holo
โโฌก ${prefix}fox_girl
โโฌก ${prefix}tits
โโฌก ${prefix}eroyuri
โโฌก ${prefix}holoyero
โโฌก ${prefix}lizard
โโฌก ${prefix}keta
โโฌก ${prefix}eron
โโฌก ${prefix}erok
โโฌก ${prefix}kemonomimi
โโฌก ${prefix}cum_jpg
โโฌก ${prefix}nsfw_avatar
โโฌก ${prefix}erofeet
โโฌก ${prefix}meow
โโฌก ${prefix}wallpaper
โโฌก ${prefix}waifu
โโฌก ${prefix}trap
โโฌก ${prefix}lewd
โโฌก ${prefix}pussy_jpg
โโฌก ${prefix}futanari
โโฌก ${prefix}lewdk
โโฌก ${prefix}solog
โโฌก ${prefix}smug
โโฌก ${prefix}cum
โโฌก ${prefix}slap
โโฌก ${prefix}les
โโฌก ${prefix}erokemo
โโฌก ${prefix}bj
โโฌก ${prefix}pwankg
โโฌก ${prefix}pat
โโฌก ${prefix}poke
โโฌก ${prefix}feed
โโฌก ${prefix}nsfw_neko_gif
โโฌก ${prefix}pussy
โโฌก ${prefix}feetg
โโฌก ${prefix}baka
โโฌก ${prefix}hug
โโฌก ${prefix}kiss
โโฌก ${prefix}tickle
โโฌก ${prefix}spank
โโฌก ${prefix}kuni
โโฌก ${prefix}classic
โโฌก ${prefix}boobs
โโฌก ${prefix}anal
โโฌก ${prefix}ngif
โโฌก ${prefix}cuddle
โโโฌฃ ${prefix}zettai

โโโใ Ephoto360 Menu ใโโโฌฃ
โโฌก ${prefix}youtubegold
โโฌก ${prefix}youtubesilver
โโฌก ${prefix}facebookgold
โโฌก ${prefix}facebooksilver
โโฌก ${prefix}instagramgold
โโฌก ${prefix}instagramsilver
โโฌก ${prefix}twittergold
โโฌก ${prefix}twittersilver
โโฌก ${prefix}retrotext
โโฌก ${prefix}halloweenbats
โโฌก ${prefix}texthalloween
โโฌก ${prefix}cardhalloween
โโฌก ${prefix}birthdaycake
โโฌก ${prefix}thundertext
โโฌก ${prefix}icetext
โโฌก ${prefix}milkcake
โโฌก ${prefix}snowontext
โโฌก ${prefix}metalstar
โโฌก ${prefix}dragonfire
โโฌก ${prefix}zombie3d
โโฌก ${prefix}merrycard
โโฌก ${prefix}generalexam 
โโฌก ${prefix}viettel
โโฌก ${prefix}embroider
โโฌก ${prefix}graffititext
โโฌก ${prefix}graffititext2
โโฌก ${prefix}graffititext3
โโฌก ${prefix}covergraffiti
โโฌก ${prefix}moderngold
โโฌก ${prefix}capercut
โโฌก ${prefix}lovecard
โโฌก ${prefix}heartflashlight
โโฌก ${prefix}heartcup
โโฌก ${prefix}sunglightshadow
โโฌก ${prefix}graffiti3d
โโฌก ${prefix}moderngoldsilver
โโฌก ${prefix}moderngold2
โโฌก ${prefix}moderngold3
โโฌก ${prefix}fabrictext
โโฌก ${prefix}masteryavatar
โโฌก ${prefix}messagecoffee
โโฌก ${prefix}announofwin
โโฌก ${prefix}writeblood
โโฌก ${prefix}horrorletter
โโฌก ${prefix}writehorror
โโฌก ${prefix}shirtclub
โโฌก ${prefix}angelwing
โโฌก ${prefix}christmasseason
โโฌก ${prefix}projectyasuo
โโฌก ${prefix}lovelycute
โโฌก ${prefix}womansday
โโฌก ${prefix}covergamepubg
โโฌก ${prefix}nameonheart
โโฌก ${prefix}funnyhalloween
โโฌก ${prefix}lightningpubg
โโฌก ${prefix}greetingcardvideo 
โโฌก ${prefix}christmascard 
โโฌก ${prefix}galaxybat
โโฌก ${prefix}writegalaxy
โโฌก ${prefix}starsnight
โโฌก ${prefix}noeltext
โโฌก ${prefix}textcakes
โโฌก ${prefix}pubgbirthday
โโฌก ${prefix}galaxywallpaper
โโฌก ${prefix}pubgglicthvideo 
โโฌก ${prefix}pubgmascotlogo
โโฌก ${prefix}realembroidery
โโฌก ${prefix}vintagetelevision
โโฌก ${prefix}funnyanimations
โโฌก ${prefix}glowingtext
โโฌก ${prefix}textonglass
โโฌก ${prefix}cartoonstyle
โโฌก ${prefix}multicolor
โโฌก ${prefix}watercolor2
โโฌก ${prefix}textsky
โโฌก ${prefix}summerbeach
โโฌก ${prefix}1917text
โโฌก ${prefix}puppycute
โโโฌฃ ${prefix}rosebirthday


โโโใ Textpro Menu ใโโโฌฃ
โโฌก ${prefix}halloween2 text|text2
โโฌก ${prefix}horror text|text2
โโฌก ${prefix}game8bit text|text2
โโฌก ${prefix}layered text|text2
โโฌก ${prefix}glitch2 text|text2
โโฌก ${prefix}coolg text|text2
โโฌก ${prefix}coolwg text|text2
โโฌก ${prefix}realistic text|text2
โโฌก ${prefix}space3d text|text2
โโฌก ${prefix}gtiktok text|text2
โโฌก ${prefix}stone text|text2
โโฌก ${prefix}marvel text|text2
โโฌก ${prefix}marvel2 text|text2
โโฌก ${prefix}pornhub text|text2
โโฌก ${prefix}avengers text|text2
โโฌก ${prefix}metalr text|text2
โโฌก ${prefix}metalg text|text2
โโฌก ${prefix}metalg2 text|text2
โโฌก ${prefix}halloween2 text|text2
โโฌก ${prefix}lion text|text2
โโฌก ${prefix}wolf_bw text|text2
โโฌก ${prefix}wolf_g text|text2
โโฌก ${prefix}ninja text|text2
โโฌก ${prefix}3dsteel text|text2
โโฌก ${prefix}horror2 text|text2
โโฌก ${prefix}lava text|text2
โโฌก ${prefix}bagel text|text2
โโฌก ${prefix}blackpink text
โโฌก ${prefix}rainbow2 text
โโฌก ${prefix}water_pipe text
โโฌก ${prefix}halloween text
โโฌก ${prefix}sketch text
โโฌก ${prefix}sircuit text
โโฌก ${prefix}discovery text
โโฌก ${prefix}metallic2 text
โโฌก ${prefix}fiction text
โโฌก ${prefix}demon text
โโฌก ${prefix}transformer text
โโฌก ${prefix}berry text
โโฌก ${prefix}thunder text
โโฌก ${prefix}magma text
โโฌก ${prefix}3dstone text
โโฌก ${prefix}neon text
โโฌก ${prefix}glitch text
โโฌก ${prefix}harry_potter text
โโฌก ${prefix}embossed text
โโฌก ${prefix}broken text
โโฌก ${prefix}papercut text
โโฌก ${prefix}gradient text
โโฌก ${prefix}glossy text
โโฌก ${prefix}watercolor text
โโฌก ${prefix}multicolor text
โโฌก ${prefix}neon_devil text
โโฌก ${prefix}underwater text
โโฌก ${prefix}bear text
โโฌก ${prefix}wonderfulg text
โโฌก ${prefix}christmas text
โโฌก ${prefix}neon_light text
โโฌก ${prefix}snow text
โโฌก ${prefix}cloudsky text
โโฌก ${prefix}luxury2 text
โโฌก ${prefix}gradient2 text
โโฌก ${prefix}summer text
โโฌก ${prefix}writing text
โโฌก ${prefix}engraved text
โโฌก ${prefix}summery text
โโฌก ${prefix}3dglue text
โโฌก ${prefix}metaldark text
โโฌก ${prefix}neonlight text
โโฌก ${prefix}oscar text
โโฌก ${prefix}minion text
โโฌก ${prefix}holographic text
โโฌก ${prefix}purple text
โโฌก ${prefix}glossyb text
โโฌก ${prefix}deluxe2 text
โโฌก ${prefix}glossyc text
โโฌก ${prefix}fabric text
โโฌก ${prefix}neonc text
โโฌก ${prefix}newyear text
โโฌก ${prefix}newyear2 text
โโฌก ${prefix}metals text
โโฌก ${prefix}xmas text
โโฌก ${prefix}blood text
โโฌก ${prefix}darkg text
โโฌก ${prefix}joker text
โโฌก ${prefix}wicker text
โโฌก ${prefix}natural text
โโฌก ${prefix}firework text
โโฌก ${prefix}skeleton text
โโฌก ${prefix}balloon text
โโฌก ${prefix}balloon2 text
โโฌก ${prefix}balloon3 text
โโฌก ${prefix}balloon4 text
โโฌก ${prefix}balloon5 text
โโฌก ${prefix}balloon6 text
โโฌก ${prefix}balloon7 text
โโฌก ${prefix}steel text
โโฌก ${prefix}gloss text
โโฌก ${prefix}denim text
โโฌก ${prefix}decorate text
โโฌก ${prefix}decorate2 text
โโฌก ${prefix}peridot text
โโฌก ${prefix}rock text
โโฌก ${prefix}glass text
โโฌก ${prefix}glass2 text
โโฌก ${prefix}glass3 text
โโฌก ${prefix}glass4 text
โโฌก ${prefix}glass5 text
โโฌก ${prefix}glass6 text
โโฌก ${prefix}glass7 text
โโฌก ${prefix}glass8 text
โโฌก ${prefix}captain_as2 text
โโฌก ${prefix}robot text
โโฌก ${prefix}equalizer text
โโฌก ${prefix}toxic text
โโฌก ${prefix}sparkling text
โโฌก ${prefix}sparkling2 text
โโฌก ${prefix}sparkling3 text
โโฌก ${prefix}sparkling4 text
โโฌก ${prefix}sparkling5 text
โโฌก ${prefix}sparkling6 text
โโฌก ${prefix}sparkling7 text
โโฌก ${prefix}decorative text
โโฌก ${prefix}chocolate text
โโฌก ${prefix}strawberry text
โโฌก ${prefix}koifish text
โโฌก ${prefix}bread text
โโฌก ${prefix}matrix text
โโฌก ${prefix}blood2 text
โโฌก ${prefix}neonligth2 text
โโฌก ${prefix}thunder2 text
โโฌก ${prefix}3dbox text
โโฌก ${prefix}neon2 text
โโฌก ${prefix}roadw text
โโฌก ${prefix}bokeh text
โโฌก ${prefix}gneon text
โโฌก ${prefix}advanced text
โโฌก ${prefix}dropwater text
โโฌก ${prefix}wall text
โโฌก ${prefix}chrismast text
โโฌก ${prefix}honey text
โโฌก ${prefix}drug text
โโฌก ${prefix}marble text
โโฌก ${prefix}marble2 text
โโฌก ${prefix}ice text
โโฌก ${prefix}juice text
โโฌก ${prefix}rusty text
โโฌก ${prefix}abstra text
โโฌก ${prefix}biscuit text
โโฌก ${prefix}wood text
โโฌก ${prefix}scifi text
โโฌก ${prefix}metalr text
โโฌก ${prefix}purpleg text
โโฌก ${prefix}shiny text 
โโฌก ${prefix}jewelry text
โโฌก ${prefix}jewelry2 text
โโฌก ${prefix}jewelry3 text
โโฌก ${prefix}jewelry4 text
โโฌก ${prefix}jewelry5 text
โโฌก ${prefix}jewelry6 text
โโฌก ${prefix}jewelry7 text
โโฌก ${prefix}jewelry8 text
โโฌก ${prefix}metalh text
โโฌก ${prefix}golden text
โโฌก ${prefix}glitter text
โโฌก ${prefix}glitter2 text
โโฌก ${prefix}glitter3 text
โโฌก ${prefix}glitter4 text
โโฌก ${prefix}glitter5 text
โโฌก ${prefix}glitter6 text
โโฌก ${prefix}glitter7 text
โโฌก ${prefix}metale text
โโฌก ${prefix}carbon text
โโฌก ${prefix}candy text
โโฌก ${prefix}metalb text
โโฌก ${prefix}gemb text
โโฌก ${prefix}3dchrome text
โโฌก ${prefix}metalb2 text
โโฌก ${prefix}metalg text
โโโฌฃ ${prefix}metalg text


โโโใ Others ใโโโฌฃ
โโฌก ${prefix}afk [reason]
โโฌก ${prefix}translate kode_bahasa text
โโฌก ${prefix}kalkulator [query]
โโฌก ${prefix}smeme [text]
โโฌก ${prefix}smeme2 [text|text]
โโฌก ${prefix}memegen [text|text]
โโโฌฃ

โโโใ Game Menu ใโโโฌฃ
โโฌก ${prefix}kuismath
โโฌก ${prefix}tebak [option]
โโฌก ${prefix}tekateki
โโฌก ${prefix}susunkata
โโโฌฃ ${prefix}caklontong


โโโใ Asupan Menu ใโโโฌฃ
โโฌก ${prefix}chika
โโฌก ${prefix}delvira
โโฌก ${prefix}ayu
โโฌก ${prefix}bunga
โโฌก ${prefix}aura
โโฌก ${prefix}nisa
โโฌก ${prefix}ziva
โโฌก ${prefix}yana
โโฌก ${prefix}viona
โโฌก ${prefix}syania
โโฌก ${prefix}riri
โโฌก ${prefix}syifa
โโฌก ${prefix}mama_gina
โโฌก ${prefix}alcakenya
โโฌก ${prefix}mangayutri
โโฌก ${prefix}rikagusriani
โโฌก ${prefix}asupan
โโฌก ${prefix}bocil
โโฌก ${prefix}geayubi
โโฌก ${prefix}santuy
โโฌก ${prefix}ukhty
โโโฌฃ ${prefix}syifa

โโโใ Telegram Sticker ใโโโฌฃ
โโฌก ${prefix}awoawo
โโฌก ${prefix}benedict
โโฌก ${prefix}chat
โโฌก ${prefix}dbfly
โโฌก ${prefix}dino_kuning
โโฌก ${prefix}doge
โโฌก ${prefix}gojosatoru
โโฌก ${prefix}hope_boy
โโฌก ${prefix}jisoo
โโฌก ${prefix}kr_robot
โโฌก ${prefix}kucing
โโฌก ${prefix}lonte
โโฌก ${prefix}manusia_lidi
โโฌก ${prefix}menjamet
โโฌก ${prefix}meow
โโฌก ${prefix}nicholas
โโฌก ${prefix}patrick
โโฌก ${prefix}popoci
โโฌก ${prefix}sponsbob
โโฌก ${prefix}kawan_sponsbob
โโโฌฃ ${prefix}tyni

โโโใ Random Cewe ใโโโฌฃ
โโฌก ${prefix}china 
โโฌก ${prefix}indonesia 
โโฌก ${prefix}malaysia 
โโฌก ${prefix}thailand 
โโฌก ${prefix}korea 
โโฌก ${prefix}japan 
โโฌก ${prefix}vietnam 
โโฌก ${prefix}jenni 
โโฌก ${prefix}jiso 
โโฌก ${prefix}lisa  
โโโฌฃ ${prefix}rose

โโโใ TqTo ใโโโฌฃ 
โโฌก My God
โโฌก My Parents
โโฌก Fatih A.
โโฌก Ferdi
โโฌก DikaArdnt
โโฌก Mhankbarbar
โโฌก Nurutomo
โโฌก Rashid
โโฌก ZeeoneOfc
โโฌก Penyedia Module
โโโฌฃ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*โโ ใ RULES AND FAQ ใโโโฌฃ โโ*

1. Jangan spam bot. ๐
Sanksi: *โ WARN/SOFT BLOCK*

2. Jangan telepon bot. โ๏ธ
Sanksi: *โ SOFT BLOCK*

3. Jangan mengeksploitasi bot.๐
Sanksi: *PERMANENT BLOCK*

๐ฏ๏ธ Bot tidak atau lambat merespon ?
โก๏ธ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rulesโผ๏ธ

๐ฏ๏ธ Dimana saya bisa mendapatkan Script dari bot ini ?
โก๏ธ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

๐ฏ๏ธ Boleh saya menambah ke grup?
โก๏ธ Untuk sementara bot dalam status free to add.

๐ฏ๏ธ Prefixnya apa ya?
โก๏ธ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

๐ฏ๏ธ Kak, kok syaa chat owner tidak direspon?
โก๏ธ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

โ?๏ธ Segala kebijakan dan ketentuan Alphabot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*๏น*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Alphabot
๐๐
`
}
exports.welcome = () =>{
	return`๐ฉ๐บ๐๐๐บ๐ ๐๐๐๐บ ๐๐๐๐๐ ๐๐บ๐ ๐ค
	
โญ ๐ญ๐บ๐๐บ :
โโฌก ๐ด๐๐๐ :
โโฌก ๐ฆ๐พ๐๐ฝ๐พ๐ :
โโฌก ๐?๐๐๐๐ :
โโโฌฃ ๐ฏ๐บ๐๐๐๐ ๐๐๐๐พ๐ ๐๐๐๐ ๐๐บ ๐๐บk ~`
}
exports.leave = () =>{
	return`Yah kok out ๐ฃ Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*โโโฌฃโโใ SOURCE CODE ใโโโฌฃโโ*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : By Me ๐ฆ
`
}
exports.tos = (ownernomer) => {
    return `
*-------ใ DONATE ใโโโฌฃ -------*

Hai kak โบ๏ธ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti ๐

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`โโโใ Bot Info ใโโโฌฃ 
โโฌก ${prefix}owner
โโฌก ${prefix}rules
โโฌก ${prefix}sc
โโฌก ${prefix}ping
โโฌก ${prefix}runtime
โโฌก ${prefix}botstatus
โโโฌฃ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`โโโใ Owner ใโโโฌฃ 
โโฌก < evaluate
โโฌก > evaluate
โโฌก $ exec
โโฌก => exec
โโฌก ${prefix}setmenu [query]
โโฌก ${prefix}setmenu templateLocation
โโฌก ${prefix}setmenu templateTenor
โโฌก ${prefix}setmenu katalog
โโฌก ${prefix}setmenu katalog2
โโฌก ${prefix}setmenu list
โโฌก ${prefix}setwm packname|author
โโฌก ${prefix}sendsesi
โโฌก ${prefix}listpc
โโฌก ${prefix}listgc
โโฌก ${prefix}broadcast [text]
โโฌก ${prefix}bc [text]
โโฌก ${prefix}bcgc [text]
โโฌก ${prefix}nsfw [on/off]
โโฌก ${prefix}mute [on/off]
โโฌก ${prefix}banchat
โโฌก ${prefix}unbanchat
โโฌก ${prefix}autorespond [on/off]
โโฌก ${prefix}antiviewonce [on/off]
โโฌก ${prefix}join [link]
โโฌก ${prefix}self
โโฌก ${prefix}public [only bot]
โโฌก ${prefix}del [pesan bot]
โโโฌฃ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`โโโใ Database ใโโโฌฃ 
โโฌก ${prefix}setcmd [reply stiker]
โโฌก ${prefix}delcmd [reply stiker]
โโฌก ${prefix}listcmd
โโฌก ${prefix}absen
โโฌก ${prefix}cekabsen
โโฌก ${prefix}deleteabsen
โโฌก ${prefix}absenstart
โโฌก ${prefix}addmsg [nama file]
โโฌก ${prefix}getmsg [nama file]
โโฌก ${prefix}listmsg
โโโฌฃ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`โโโใ Group ใโโโฌฃ 
โโฌก ${prefix}listonline
โโฌก ${prefix}sider
โโฌก ${prefix}wm packname|author
โโฌก ${prefix}infochat
โโฌก ${prefix}setdesk [text]
โโฌก ${prefix}setppgrup [reply image]
โโฌก ${prefix}antilink [on/off]
โโฌก ${prefix}revoke
โโฌก ${prefix}leave
โโฌก ${prefix}add [62***]
โโฌก ${prefix}kick @tag
โโฌก ${prefix}leave
โโฌก ${prefix}linkgc
โโฌก ${prefix}take packname|author
โโฌก ${prefix}group [open/close]
โโฌก ${prefix}tagall [text]
โโโฌฃ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`โโโใ Anime ใโโโฌฃ 
โโฌก ${prefix}quotesanime
โโฌก ${prefix}anime [query]
โโฌก ${prefix}manga [query]
โโโฌฃ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`โโโใ Tag ใโโโฌฃ 
โโฌก ${prefix}stickertag
โโฌก ${prefix}videotag [query]
โโฌก ${prefix}vntag [query]
โโโฌฃ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`โโโใ Stalking ใโโโฌฃ 
โโฌก ${prefix}igstalk [username]
โโฌก ${prefix}ghstalk [username]
โโโฌฃ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`โโโใ Search ใโโโฌฃ 
โโฌก ${prefix}ytsearch [query]
โโฌก ${prefix}wallpaper [query]
โโฌก ${prefix}google [query]
โโฌก ${prefix}wikimedia [query]
โโฌก ${prefix}hentai
โโฌก ${prefix}wattpad [query]
โโฌก ${prefix}webtoons [query]
โโฌก ${prefix}drakor [query]
โโโฌฃ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`โโโใ Converter ใโโโฌฃ 
โโฌก ${prefix}toaudio [video]
โโฌก ${prefix}tomp3 [video]
โโฌก ${prefix}tovn [video]
โโฌก ${prefix}stiker [reply image]
โโฌก ${prefix}tourl [image/video]
โโฌก ${prefix}togif [sticker]
โโฌก ${prefix}tomp4 [sticker]
โโโฌฃ${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`โโโใ Image Effect ใโโโฌฃ 
โโฌก ${prefix}wanted [reply image/stiker]
โโฌก ${prefix}utatoo [reply image/stiker]
โโฌก ${prefix}unsharpen [reply image/stiker]
โโฌก ${prefix}thanos [reply image/stiker]
โโฌก ${prefix}sniper [reply image/stiker]
โโฌก ${prefix}sharpen [reply image/stiker]
โโฌก ${prefix}sepia [reply image/stiker]
โโฌก ${prefix}scary [reply image/stiker]
โโฌก ${prefix}rip [reply image/stiker]
โโฌก ${prefix}redple [reply image/stiker]
โโฌก ${prefix}rejected [reply image/stiker]
โโฌก ${prefix}posterize [reply image/stiker]
โโฌก ${prefix}ps4 [reply image/stiker]
โโฌก ${prefix}pixelize [reply image/stiker]
โโฌก ${prefix}missionpassed [reply image/stiker]
โโฌก ${prefix}moustache [reply image/stiker]
โโฌก ${prefix}lookwhatkarenhave [reply image/stiker]
โโฌก ${prefix}jail [reply image/stiker]
โโฌก ${prefix}invert [reply image/stiker]
โโฌก ${prefix}instagram [reply image/stiker]
โโฌก ${prefix}greyscale [reply image/stiker]
โโฌก ${prefix}glitch [reply image/stiker]
โโฌก ${prefix}gay [reply image/stiker]
โโฌก ${prefix}frame [reply image/stiker]
โโฌก ${prefix}fire [reply image/stiker]
โโฌก ${prefix}distort [reply image/stiker]
โโฌก ${prefix}dictator [reply image/stiker]
โโฌก ${prefix}deepfry [reply image/stiker]
โโฌก ${prefix}ddungeon [reply image/stiker]
โโฌก ${prefix}circle [reply image/stiker]
โโฌก ${prefix}challenger [reply image/stiker]
โโฌก ${prefix}burn [reply image/stiker]
โโฌก ${prefix}brazzers [reply image/stiker]
โโโฌฃ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`โโโใ Sticker Effect ใโโโฌฃ 
โโฌก ${prefix}jail [reply image/stiker]
โโฌก ${prefix}red [reply image/stiker]
โโฌก ${prefix}gay [reply image/stiker]
โโฌก ${prefix}bloo [reply image/stiker]
โโฌก ${prefix}blue [reply image/stiker]
โโฌก ${prefix}sepia [reply image/stiker]
โโฌก ${prefix}green [reply image/stiker]
โโฌก ${prefix}glass [reply image/stiker]
โโฌก ${prefix}invert [reply image/stiker]
โโฌก ${prefix}blurple [reply image/stiker]
โโฌก ${prefix}blurple2 [reply image/stiker]
โโฌก ${prefix}wasted [reply image/stiker]
โโฌก ${prefix}passed [reply image/stiker]
โโฌก ${prefix}triggered [reply image/stiker]
โโฌก ${prefix}comrade [reply image/stiker]
โโฌก ${prefix}greyscale [reply image/stiker]
โโฌก ${prefix}threshold [reply image/stiker]
โโฌก ${prefix}brightness [reply image/stiker]
โโโฌฃ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`โโโใ Download ใโโโฌฃ 
โโฌก ${prefix}tiktok [link]
โโฌก ${prefix}tiktoknowm [link]
โโฌก ${prefix}tiktokwm [link]
โโฌก ${prefix}tiktokaudio [link]
โโฌก ${prefix}ytdl [link]
โโฌก ${prefix}play [query]
โโฌก ${prefix}ytmp3 [link]
โโฌก ${prefix}ytshortmp3 [link]
โโฌก ${prefix}ytmp4 [link]
โโฌก ${prefix}ytshorts [link]
โโฌก ${prefix}facebook [link]
โโฌก ${prefix}facebooksd [link]
โโฌก ${prefix}facebookhd [link]
โโฌก ${prefix}fbaudio [link]
โโฌก ${prefix}igstory [username]
โโฌก ${prefix}igdl [link]
โโฌก ${prefix}igphoto [link]
โโฌก ${prefix}igvideo [link]
โโฌก ${prefix}igreels [link]
โโฌก ${prefix}igtv [link]
โโฌก ${prefix}soundcloud [link]
โโฌก ${prefix}gitclone [link repo]
โโฌก ${prefix}gitrepo [username repo branch]
โโฌก ${prefix}mediafire [link]
โโโฌฃ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`โโโใ Random Anime ใโโโฌฃ
โโฌก ${prefix}loli
โโฌก ${prefix}neko
โโฌก ${prefix}waifu
โโฌก ${prefix}shinobu
โโฌก ${prefix}megumin
โโฌก ${prefix}bully
โโฌก ${prefix}cuddle
โโฌก ${prefix}cry
โโฌก ${prefix}hug
โโฌก ${prefix}awoo
โโฌก ${prefix}kiss
โโฌก ${prefix}lick
โโฌก ${prefix}pat
โโฌก ${prefix}smug
โโฌก ${prefix}bonk
โโฌก ${prefix}yeet
โโฌก ${prefix}blush
โโฌก ${prefix}smile
โโฌก ${prefix}wave
โโฌก ${prefix}highfive
โโฌก ${prefix}handhold
โโฌก ${prefix}nom
โโฌก ${prefix}bite
โโฌก ${prefix}glomp
โโฌก ${prefix}slap
โโฌก ${prefix}kill
โโฌก ${prefix}happy
โโฌก ${prefix}wink
โโฌก ${prefix}poke
โโฌก ${prefix}dance
โโโฌฃ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`โโโใ Nsfw & Sfw ใโโโฌฃ
โโฌก ${prefix}ahegao
โโฌก ${prefix}ass
โโฌก ${prefix}bdsm
โโฌก ${prefix}blowjob
โโฌก ${prefix}cuckold
โโฌก ${prefix}cum
โโฌก ${prefix}ero
โโฌก ${prefix}femdom
โโฌก ${prefix}foot
โโฌก ${prefix}gangbang
โโฌก ${prefix}glasses
โโฌก ${prefix}jahy
โโฌก ${prefix}manga
โโฌก ${prefix}masturbation
โโฌก ${prefix}neko
โโฌก ${prefix}orgy
โโฌก ${prefix}panties
โโฌก ${prefix}pussy
โโฌก ${prefix}tentacles
โโฌก ${prefix}thighs
โโฌก ${prefix}yuri
โโฌก ${prefix}feet
โโฌก ${prefix}lewdkemo
โโฌก ${prefix}woof
โโฌก ${prefix}gasm
โโฌก ${prefix}solo
โโฌก ${prefix}8ball
โโฌก ${prefix}goose
โโฌก ${prefix}avatar
โโฌก ${prefix}hololewd
โโฌก ${prefix}gecg
โโฌก ${prefix}holo
โโฌก ${prefix}fox_girl
โโฌก ${prefix}tits
โโฌก ${prefix}eroyuri
โโฌก ${prefix}holoyero
โโฌก ${prefix}lizard
โโฌก ${prefix}keta
โโฌก ${prefix}eron
โโฌก ${prefix}erok
โโฌก ${prefix}kemonomimi
โโฌก ${prefix}cum_jpg
โโฌก ${prefix}nsfw_avatar
โโฌก ${prefix}erofeet
โโฌก ${prefix}meow
โโฌก ${prefix}wallpaper
โโฌก ${prefix}waifu
โโฌก ${prefix}trap
โโฌก ${prefix}lewd
โโฌก ${prefix}pussy_jpg
โโฌก ${prefix}futanari
โโฌก ${prefix}lewdk
โโฌก ${prefix}solog
โโฌก ${prefix}smug
โโฌก ${prefix}cum
โโฌก ${prefix}slap
โโฌก ${prefix}les
โโฌก ${prefix}erokemo
โโฌก ${prefix}bj
โโฌก ${prefix}pwankg
โโฌก ${prefix}pat
โโฌก ${prefix}poke
โโฌก ${prefix}feed
โโฌก ${prefix}nsfw_neko_gif
โโฌก ${prefix}pussy
โโฌก ${prefix}feetg
โโฌก ${prefix}baka
โโฌก ${prefix}hug
โโฌก ${prefix}kiss
โโฌก ${prefix}tickle
โโฌก ${prefix}spank
โโฌก ${prefix}kuni
โโฌก ${prefix}classic
โโฌก ${prefix}boobs
โโฌก ${prefix}anal
โโฌก ${prefix}ngif
โโฌก ${prefix}cuddle
โโโฌฃ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`โโโใ Textpro Menu ใโโโฌฃ
โโฌก ${prefix}halloween2 text|text2
โโฌก ${prefix}horror text|text2
โโฌก ${prefix}game8bit text|text2
โโฌก ${prefix}layered text|text2
โโฌก ${prefix}glitch2 text|text2
โโฌก ${prefix}coolg text|text2
โโฌก ${prefix}coolwg text|text2
โโฌก ${prefix}realistic text|text2
โโฌก ${prefix}space3d text|text2
โโฌก ${prefix}gtiktok text|text2
โโฌก ${prefix}stone text|text2
โโฌก ${prefix}marvel text|text2
โโฌก ${prefix}marvel2 text|text2
โโฌก ${prefix}pornhub text|text2
โโฌก ${prefix}avengers text|text2
โโฌก ${prefix}metalr text|text2
โโฌก ${prefix}metalg text|text2
โโฌก ${prefix}metalg2 text|text2
โโฌก ${prefix}halloween2 text|text2
โโฌก ${prefix}lion text|text2
โโฌก ${prefix}wolf_bw text|text2
โโฌก ${prefix}wolf_g text|text2
โโฌก ${prefix}ninja text|text2
โโฌก ${prefix}3dsteel text|text2
โโฌก ${prefix}horror2 text|text2
โโฌก ${prefix}lava text|text2
โโฌก ${prefix}bagel text|text2
โโฌก ${prefix}blackpink text
โโฌก ${prefix}rainbow2 text
โโฌก ${prefix}water_pipe text
โโฌก ${prefix}halloween text
โโฌก ${prefix}sketch text
โโฌก ${prefix}sircuit text
โโฌก ${prefix}discovery text
โโฌก ${prefix}metallic2 text
โโฌก ${prefix}fiction text
โโฌก ${prefix}demon text
โโฌก ${prefix}transformer text
โโฌก ${prefix}berry text
โโฌก ${prefix}thunder text
โโฌก ${prefix}magma text
โโฌก ${prefix}3dstone text
โโฌก ${prefix}neon text
โโฌก ${prefix}glitch text
โโฌก ${prefix}harry_potter text
โโฌก ${prefix}embossed text
โโฌก ${prefix}broken text
โโฌก ${prefix}papercut text
โโฌก ${prefix}gradient text
โโฌก ${prefix}glossy text
โโฌก ${prefix}watercolor text
โโฌก ${prefix}multicolor text
โโฌก ${prefix}neon_devil text
โโฌก ${prefix}underwater text
โโฌก ${prefix}bear text
โโฌก ${prefix}wonderfulg text
โโฌก ${prefix}christmas text
โโฌก ${prefix}neon_light text
โโฌก ${prefix}snow text
โโฌก ${prefix}cloudsky text
โโฌก ${prefix}luxury2 text
โโฌก ${prefix}gradient2 text
โโฌก ${prefix}summer text
โโฌก ${prefix}writing text
โโฌก ${prefix}engraved text
โโฌก ${prefix}summery text
โโฌก ${prefix}3dglue text
โโฌก ${prefix}metaldark text
โโฌก ${prefix}neonlight text
โโฌก ${prefix}oscar text
โโฌก ${prefix}minion text
โโฌก ${prefix}holographic text
โโฌก ${prefix}purple text
โโฌก ${prefix}glossyb text
โโฌก ${prefix}deluxe2 text
โโฌก ${prefix}glossyc text
โโฌก ${prefix}fabric text
โโฌก ${prefix}neonc text
โโฌก ${prefix}newyear text
โโฌก ${prefix}newyear2 text
โโฌก ${prefix}metals text
โโฌก ${prefix}xmas text
โโฌก ${prefix}blood text
โโฌก ${prefix}darkg text
โโฌก ${prefix}joker text
โโฌก ${prefix}wicker text
โโฌก ${prefix}natural text
โโฌก ${prefix}firework text
โโฌก ${prefix}skeleton text
โโฌก ${prefix}balloon text
โโฌก ${prefix}balloon2 text
โโฌก ${prefix}balloon3 text
โโฌก ${prefix}balloon4 text
โโฌก ${prefix}balloon5 text
โโฌก ${prefix}balloon6 text
โโฌก ${prefix}balloon7 text
โโฌก ${prefix}steel text
โโฌก ${prefix}gloss text
โโฌก ${prefix}denim text
โโฌก ${prefix}decorate text
โโฌก ${prefix}decorate2 text
โโฌก ${prefix}peridot text
โโฌก ${prefix}rock text
โโฌก ${prefix}glass text
โโฌก ${prefix}glass2 text
โโฌก ${prefix}glass3 text
โโฌก ${prefix}glass4 text
โโฌก ${prefix}glass5 text
โโฌก ${prefix}glass6 text
โโฌก ${prefix}glass7 text
โโฌก ${prefix}glass8 text
โโฌก ${prefix}captain_as2 text
โโฌก ${prefix}robot text
โโฌก ${prefix}equalizer text
โโฌก ${prefix}toxic text
โโฌก ${prefix}sparkling text
โโฌก ${prefix}sparkling2 text
โโฌก ${prefix}sparkling3 text
โโฌก ${prefix}sparkling4 text
โโฌก ${prefix}sparkling5 text
โโฌก ${prefix}sparkling6 text
โโฌก ${prefix}sparkling7 text
โโฌก ${prefix}decorative text
โโฌก ${prefix}chocolate text
โโฌก ${prefix}strawberry text
โโฌก ${prefix}koifish text
โโฌก ${prefix}bread text
โโฌก ${prefix}matrix text
โโฌก ${prefix}blood2 text
โโฌก ${prefix}neonligth2 text
โโฌก ${prefix}thunder2 text
โโฌก ${prefix}3dbox text
โโฌก ${prefix}neon2 text
โโฌก ${prefix}roadw text
โโฌก ${prefix}bokeh text
โโฌก ${prefix}gneon text
โโฌก ${prefix}advanced text
โโฌก ${prefix}dropwater text
โโฌก ${prefix}wall text
โโฌก ${prefix}chrismast text
โโฌก ${prefix}honey text
โโฌก ${prefix}drug text
โโฌก ${prefix}marble text
โโฌก ${prefix}marble2 text
โโฌก ${prefix}ice text
โโฌก ${prefix}juice text
โโฌก ${prefix}rusty text
โโฌก ${prefix}abstra text
โโฌก ${prefix}biscuit text
โโฌก ${prefix}wood text
โโฌก ${prefix}scifi text
โโฌก ${prefix}metalr text
โโฌก ${prefix}purpleg text
โโฌก ${prefix}shiny text 
โโฌก ${prefix}jewelry text
โโฌก ${prefix}jewelry2 text
โโฌก ${prefix}jewelry3 text
โโฌก ${prefix}jewelry4 text
โโฌก ${prefix}jewelry5 text
โโฌก ${prefix}jewelry6 text
โโฌก ${prefix}jewelry7 text
โโฌก ${prefix}jewelry8 text
โโฌก ${prefix}metalh text
โโฌก ${prefix}golden text
โโฌก ${prefix}glitter text
โโฌก ${prefix}glitter2 text
โโฌก ${prefix}glitter3 text
โโฌก ${prefix}glitter4 text
โโฌก ${prefix}glitter5 text
โโฌก ${prefix}glitter6 text
โโฌก ${prefix}glitter7 text
โโฌก ${prefix}metale text
โโฌก ${prefix}carbon text
โโฌก ${prefix}candy text
โโฌก ${prefix}metalb text
โโฌก ${prefix}gemb text
โโฌก ${prefix}3dchrome text
โโฌก ${prefix}metalb2 text
โโฌก ${prefix}metalg text
โโโฌฃ ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`โโโใ Others ใโโโฌฃ
โโฌก ${prefix}ttp [text]
โโฌก ${prefix}attp [text]
โโฌก ${prefix}afk [reason]
โโฌก ${prefix}translate kode_bahasa text
โโฌก ${prefix}kalkulator [query]
โโฌก ${prefix}smeme [text]
โโฌก ${prefix}smeme2 [text|text]
โโโฌฃ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`โโโใ Game Menu ใโโโฌฃ
โโฌก ${prefix}kuismath
โโฌก ${prefix}tebak [option]
โโฌก ${prefix}tekateki
โโฌก ${prefix}susunkata
โโโฌฃ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`โโโใ Asupan Menu ใโโโฌฃ
โโฌก ${prefix}chika
โโฌก ${prefix}delvira
โโฌก ${prefix}ayu
โโฌก ${prefix}bunga
โโฌก ${prefix}aura
โโฌก ${prefix}nisa
โโฌก ${prefix}ziva
โโฌก ${prefix}yana
โโฌก ${prefix}viona
โโฌก ${prefix}syania
โโฌก ${prefix}riri
โโฌก ${prefix}syifa
โโฌก ${prefix}mama_gina
โโฌก ${prefix}alcakenya
โโฌก ${prefix}mangayutri
โโฌก ${prefix}rikagusriani
โโฌก ${prefix}asupan
โโฌก ${prefix}bocil
โโฌก ${prefix}geayubi
โโฌก ${prefix}santuy
โโฌก ${prefix}ukhty
โโโฌฃ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`โโโใ Random Cewe ใโโโฌฃ
โโฌก ${prefix}china 
โโฌก ${prefix}indonesia 
โโฌก ${prefix}malaysia 
โโฌก ${prefix}thailand 
โโฌก ${prefix}korea 
โโฌก ${prefix}japan 
โโฌก ${prefix}vietnam 
โโฌก ${prefix}jenni 
โโฌก ${prefix}jiso 
โโฌก ${prefix}lisa  
โโโฌฃ ${prefix}rose
`
}

exports.tqto = () =>{
	return`โโโใ TqTo ใโโโฌฃ 
โโฌก My God
โโฌก My Parents
โโฌก Fatih A.
โโฌก Ferdi
โโฌก DikaArdnt
โโฌก Mhankbarbar
โโฌก Nurutomo
โโฌก Rashid
โโฌก ZeeoneOfc
โโฌก Penyedia Module
โโโฌฃ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`โโโใ Primbon ใโโโฌฃ
โโฌก ${prefix}nomorhoki 887435047326
โโฌก ${prefix}artimimpi [query]
โโฌก ${prefix}artinama [query]
โโฌก ${prefix}ramaljodoh
โโฌก ${prefix}ramaljodohbali
โโฌก ${prefix}suamiistri
โโฌก ${prefix}ramalcinta
โโฌก ${prefix}cocoknama
โโฌก ${prefix}pasangan
โโฌก ${prefix}jadiannikah
โโฌก ${prefix}sifatusaha
โโฌก ${prefix}rezeki
โโฌก ${prefix}pekerjaan
โโฌก ${prefix}nasib
โโฌก ${prefix}penyakit
โโฌก ${prefix}tarot
โโฌก ${prefix}fengshui
โโฌก ${prefix}haribaik
โโฌก ${prefix}harisangar
โโฌก ${prefix}harisial
โโฌก ${prefix}nagahari
โโฌก ${prefix}arahrezeki
โโฌก ${prefix}peruntungan
โโฌก ${prefix}weton
โโฌก ${prefix}karakter
โโฌก ${prefix}keberuntungan
โโฌก ${prefix}memancing
โโฌก ${prefix}masasubur
โโฌก ${prefix}zodiak 
โโโฌฃ ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`โโโใ Telegram Sticker ใโโโฌฃ
โโฌก ${prefix}awoawo
โโฌก ${prefix}benedict
โโฌก ${prefix}chat
โโฌก ${prefix}dbfly
โโฌก ${prefix}dino_kuning
โโฌก ${prefix}doge
โโฌก ${prefix}gojosatoru
โโฌก ${prefix}hope_boy
โโฌก ${prefix}jisoo
โโฌก ${prefix}kr_robot
โโฌก ${prefix}kucing
โโฌก ${prefix}lonte
โโฌก ${prefix}manusia_lidi
โโฌก ${prefix}menjamet
โโฌก ${prefix}meow
โโฌก ${prefix}nicholas
โโฌก ${prefix}patrick
โโฌก ${prefix}popoci
โโฌก ${prefix}sponsbob
โโฌก ${prefix}kawan_sponsbob
โโโฌฃ ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`โโโใ Ephoto360 Menu ใโโโฌฃ
โโฌก ${prefix}youtubegold text
โโฌก ${prefix}youtubesilver text
โโฌก ${prefix}facebookgold text
โโฌก ${prefix}facebooksilver text
โโฌก ${prefix}instagramgold text
โโฌก ${prefix}instagramsilver text
โโฌก ${prefix}twittergold text
โโฌก ${prefix}twittersilver text
โโฌก ${prefix}retrotext text
โโฌก ${prefix}halloweenbats text
โโฌก ${prefix}texthalloween text
โโฌก ${prefix}cardhalloween text
โโฌก ${prefix}birthdaycake text
โโฌก ${prefix}thundertext text
โโฌก ${prefix}icetext text
โโฌก ${prefix}milkcake text
โโฌก ${prefix}snowontext text
โโฌก ${prefix}metalstar text
โโฌก ${prefix}dragonfire text
โโฌก ${prefix}zombie3d text
โโฌก ${prefix}merrycard text
โโฌก ${prefix}generalexam text 
โโฌก ${prefix}viettel text
โโฌก ${prefix}embroider text
โโฌก ${prefix}graffititext text
โโฌก ${prefix}graffititext2 text
โโฌก ${prefix}graffititext3 text
โโฌก ${prefix}covergraffiti text
โโฌก ${prefix}moderngold text
โโฌก ${prefix}capercut text
โโฌก ${prefix}lovecard text
โโฌก ${prefix}heartflashlight text
โโฌก ${prefix}heartcup text
โโฌก ${prefix}sunglightshadow text
โโฌก ${prefix}graffiti3d text
โโฌก ${prefix}moderngoldsilver text
โโฌก ${prefix}moderngold2 text
โโฌก ${prefix}moderngold3 text
โโฌก ${prefix}fabrictext text
โโฌก ${prefix}masteryavatar text
โโฌก ${prefix}messagecoffee text
โโฌก ${prefix}announofwin text
โโฌก ${prefix}writeblood text
โโฌก ${prefix}horrorletter text
โโฌก ${prefix}writehorror text
โโฌก ${prefix}shirtclub text
โโฌก ${prefix}angelwing text
โโฌก ${prefix}christmasseason text
โโฌก ${prefix}projectyasuo text
โโฌก ${prefix}lovelycute text
โโฌก ${prefix}womansday text
โโฌก ${prefix}covergamepubg text
โโฌก ${prefix}nameonheart text
โโฌก ${prefix}funnyhalloween text
โโฌก ${prefix}lightningpubg text
โโฌก ${prefix}greetingcardvideo text 
โโฌก ${prefix}christmascard text 
โโฌก ${prefix}galaxybat text
โโฌก ${prefix}writegalaxy text
โโฌก ${prefix}starsnight text
โโฌก ${prefix}noeltext text
โโฌก ${prefix}textcakes text
โโฌก ${prefix}pubgbirthday text
โโฌก ${prefix}galaxywallpaper text
โโฌก ${prefix}pubgglicthvideo text 
โโฌก ${prefix}pubgmascotlogo text
โโฌก ${prefix}realembroidery text
โโฌก ${prefix}vintagetelevision text
โโฌก ${prefix}funnyanimations text
โโฌก ${prefix}glowingtext text
โโฌก ${prefix}textonglass text
โโฌก ${prefix}cartoonstyle text
โโฌก ${prefix}multicolor text
โโฌก ${prefix}watercolor2 text
โโฌก ${prefix}textsky text
โโฌก ${prefix}summerbeach text
โโฌก ${prefix}1917text text
โโฌก ${prefix}puppycute text
โโฌก ${prefix}rosebirthday text
โโฌก ${prefix}steellettering text|text2
โโฌก ${prefix}letterstext text|text2
โโฌก ${prefix}barcashirt text|text2
โโฌก ${prefix}premiercup text|text2
โโฌก ${prefix}stylepoligon text|text2
โโฌก ${prefix}lifebuoys text|text2
โโโฌฃ ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`โโโใ Logo Menu ใโโโฌฃ
โโฌก ${prefix}coverbannerlol text|heroes
โโฌก ${prefix}pubglogomaker text|style
โโฌก ${prefix}colorfulpubg text|color
โโฌก ${prefix}astronotspace text|style
โโฌก ${prefix}wallpaperaov text|heroes
โโฌก ${prefix}maketeamlogo text|style
โโฌก ${prefix}circlemarcotteam text|logo
โโฌก ${prefix}wallpaperml text|heroes
โโฌก ${prefix}dragonballfb text|character
โโฌก ${prefix}bannerofaov text|character
โโฌก ${prefix}effect3donbeach text|background
โโฌก ${prefix}cutegirlgamer text|logo
โโฌก ${prefix}footballteam text|logo
โโฌก ${prefix}beautifulshimmering text|champion
โโฌก ${prefix}pubgcutelogo text|logo
โโฌก ${prefix}elegantrotation text|logo
โโฌก ${prefix}logogamingassasin text|logo
โโฌก ${prefix}introvideomaker text|logo
โโฌก ${prefix}gaminglogo4fvs text|logo
โโฌก ${prefix}blueneon text|logo
โโฌก ${prefix}metalmascot text|logo
โโฌก ${prefix}anonymous text|style
โโฌก ${prefix}lolpentakill text|style
โโฌก ${prefix}avatarleagueofking text|style
โโฌก ${prefix}avatarff text|character
โโฌก ${prefix}overwatchwallpaper text|character
โโฌก ${prefix}rovwallpaperhd text|hero
โโฌก ${prefix}rovwallpaper text|avatar
โโฌก ${prefix}beautifulgalaxylol text|style
โโฌก ${prefix}crossfirecover text|character
โโฌก ${prefix}lolwallpaper text|wallpaper
โโฌก ${prefix}coverdota2 text|heroes
โโฌก ${prefix}coverleagueofking text|character
โโฌก ${prefix}avatar3q360 text|avatar
โโฌก ${prefix}coverofwarface text|character
โโฌก ${prefix}newlolavatar text|avatar
โโฌก ${prefix}csgocover text|background
โโฌก ${prefix}coverloknew text|hero
โโฌก ${prefix}coverfblol text|letters
โโฌก ${prefix}overwatchcover text|hero
โโฌก ${prefix}crossfirestyle text|avatar
โโฌก ${prefix}avatarlolbyname text|style
โโฌก ${prefix}lolcoverbyname text|avatar
โโฌก ${prefix}cyberhunterfb text|character
โโฌก ${prefix}coverfreefirefb text|character
โโฌก ${prefix}gamingmascot text|style
โโฌก ${prefix}coveronepiecefb text|character
โโฌก ${prefix}bannerytcsgo text|banner
โโฌก ${prefix}fbgamepubgcover text|template
โโฌก ${prefix}banneroflol text|text2|banner
โโฌก ${prefix}bannerofaov2 text|text2|banner
โโฌก ${prefix}teamlogo text|text2|background
โโฌก ${prefix}companylogo2 text|text2|background
โโฌก ${prefix}companylogo text|text2|background
โโฌก ${prefix}gradientlogo text|text2|background
โโฌก ${prefix}pencilsketch text|text2|icon
โโฌก ${prefix}gunlogogaming text|text2|background
โโฌก ${prefix}banneroffreefire text|text2|background
โโฌก ${prefix}letterlogos text|text2|thumb
โโฌก ${prefix}bannerofoverwatch text|text2|background
โโฌก ${prefix}bannerofapex text|text2|background
โโฌก ${prefix}bannerofpubg text|text2|background
โโฌก ${prefix}mascotstyle text|text2|thumb
โโฌก ${prefix}logoaccording text|text2|thumb
โโโฌฃ ${prefix}avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`โโโใ Islamic Menu ใโโโฌฃ
โโฌก ${prefix}asmaulhusna
โโฌก ${prefix}kisahnabi [nabi]
โโฌก ${prefix}jadwalshalat [daerah]
โโฌก ${prefix}randomquran
โโฌก ${prefix}randomquran2
โโฌก ${prefix}listsurah
โโฌก ${prefix}tafsirsurah [surah]
โโโฌฃ ${prefix}alquranaudio [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`โโโใ Store Menu ใโโโฌฃ
โโฌก ${prefix}list
โโฌก ${prefix}addlist [key|respond]
โโฌก ${prefix}dellist [key]
โโฌก ${prefix}update [key|respond]
โโฌก ${prefix}store
โโฌก ${prefix}kali
โโฌก ${prefix}bagi
โโฌก ${prefix}tambah
โโฌก ${prefix}kurang
โโฌก ${prefix}kalkulator
โโฌก ${prefix}proses
โโโฌฃ ${prefix}done
`
}


exports.soundmenu = (prefix) =>{
return`โโโใ Sound Menu ใโโโฌฃ
โโฌก ${prefix}sound1
โโฌก ${prefix}sound2
โโฌก ${prefix}sound3
โโฌก ${prefix}sound4
โโฌก ${prefix}sound5
โโฌก ${prefix}sound6
โโฌก ${prefix}sound7
โโฌก ${prefix}sound8
โโฌก ${prefix}sound9
โโฌก ${prefix}sound10
โโฌก ${prefix}sound11
โโฌก ${prefix}sound12
โโฌก ${prefix}sound13
โโฌก ${prefix}sound14
โโฌก ${prefix}sound15
โโฌก ${prefix}sound16
โโฌก ${prefix}sound17
โโฌก ${prefix}sound18 
โโฌก ${prefix}sound19
โโฌก ${prefix}sound20
โโฌก ${prefix}sound21
โโฌก ${prefix}sound22
โโฌก ${prefix}sound23
โโฌก ${prefix}sound24
โโฌก ${prefix}sound25
โโฌก ${prefix}sound26
โโฌก ${prefix}sound27
โโฌก ${prefix}sound28
โโฌก ${prefix}sound29
โโฌก ${prefix}sound30
โโฌก ${prefix}sound31
โโฌก ${prefix}sound32
โโฌก ${prefix}sound33
โโฌก ${prefix}sound34
โโฌก ${prefix}sound35
โโฌก ${prefix}sound36
โโฌก ${prefix}sound37
โโฌก ${prefix}sound38
โโฌก ${prefix}sound39
โโฌก ${prefix}sound40
โโฌก ${prefix}sound41
โโฌก ${prefix}sound42
โโฌก ${prefix}sound43
โโฌก ${prefix}sound44
โโฌก ${prefix}sound45
โโฌก ${prefix}sound46
โโฌก ${prefix}sound47
โโฌก ${prefix}sound48
โโฌก ${prefix}sound49
โโฌก ${prefix}sound50
โโฌก ${prefix}sound51
โโฌก ${prefix}sound52
โโฌก ${prefix}sound53
โโฌก ${prefix}sound54
โโฌก ${prefix}sound55
โโฌก ${prefix}sound56
โโฌก ${prefix}sound57
โโฌก ${prefix}sound58
โโฌก ${prefix}sound59
โโฌก ${prefix}sound60
โโฌก ${prefix}sound61
โโฌก ${prefix}sound62
โโฌก ${prefix}sound63
โโฌก ${prefix}sound64
โโฌก ${prefix}sound65
โโฌก ${prefix}sound66
โโฌก ${prefix}sound67
โโฌก ${prefix}sound68
โโฌก ${prefix}sound69
โโโฌฃ ${prefix}sound70
`
}
