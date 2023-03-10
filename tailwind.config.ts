/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
		extend: {
      colors:{
        // mainDark: '#1a1a1a',
        // blackSoft: '#242424',
        // blackMute: '#2f2f2f',
        // mainBorder: '#545454',
        // primaryFont: '#ffffff',
        // secondaryFont: '#ebebeb',
        // mainGreen: '#42b883',
        // mainBlue: '#aac8e4'
        whiteMain: '#ffffff',
        whiteSoft: '#f9f9f9',
        whiteMute: '#f1f1f1',
        blackMain: '#1a1a1a',
        blackPure: '#000000',
        blackSoft: '#242424',
        blackMute: '#2f2f2f',
        indigoMain: '#213547',
        indigoSoft: '#476582',
        indigoLight: '#aac8e4',
        grayMain: '#8e8e8e',
        grayLight1: '#aeaeae',
        grayLight2: '#c7c7c7',
        grayLight3: '#d1d1d1',
        grayLight4: '#e5e5e5',
        grayLight5: '#f2f2f2',
        grayDark1: '#636363',
        grayDark2: '#484848',
        grayDark3: '#3a3a3a',
        grayDark4: '#282828',
        grayDark5: '#202020',
        dividerLight1: 'rgba(60, 60, 60, 0.29)',
        dividerLight2: 'rgba(60, 60, 60, 0.12)',
        dividerDark1: 'rgba(84, 84, 84, 0.65)',
        dividerDark2: 'rgba(84, 84, 84, 0.48)',
        textLight1: '#213547',
        textLight2: 'rgba(60, 60, 60, .7)',
        textLight3: 'rgba(60, 60, 60, .33)',
        textLight4: 'rgba(60, 60, 60, .18)',
        textLightCode: '#476582',
        textDarkCode: '#aac8e4',
        textDark1: 'rgba(255, 255, 255, .87)',
        textDark2: 'rgba(235, 235, 235, .6)',
        textDark3: 'rgba(235, 235, 235, .38)',
        textDark4: 'rgba(235, 235, 235, .18)',
        greenMain: '#42b883',
        greenLight: '#42d392',
        greenLighter: '#35eb9a',
        greenDark: '#33a06f',
        greenDarker: '#155f3e',
        blueMain: '#3b8eed',
        blueLight: '#549ced',
        blueLighter: '#50a2ff',
        blueDark: '#3468a3',
        blueDarker: '#255489',
        yellowMain: '#ffc517',
        yellowLight: '#ffe417',
        yellowLighter: '#ffff17',
        yellowDark: '#e0ad15',
        yellowDarker: '#bc9112',
        redMain: '#ed3c50',
        redLight: '#f43771',
        redLighter: '#fd1d7c',
        redDark: '#cd2d3f',
        redDarker: '#ab2131',
        purpleMain: '#de41e0',
        purpleLight: '#e936eb',
        purpleLighter: '#f616f8',
        purpleDark: '#823c83',
        purpleDarker: '#602960',
      },
    },
    },
    plugins: [],
}