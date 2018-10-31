var grunt = require('grunt')

// 配置
grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    'create-windows-installer': {
        x64: {
            authors: 'luomingtong<luomingtong@163.com>', // 作者
            projectUrl: '',
            appDirectory: './package/TEST-win32-x64', // 要打包的输入目录
            outputDirectory: './package_dir', // grunt打包后的输出目录
            exe: 'TEST.exe', // 生成的exe文件
            description: 'luoingtong design muzu-system',
            setupIcon: './app/hots.ico', // 图标
            noMsi: true // 是否生成.msi
        }
    }
})

// 加载任务
grunt.loadNpmTasks('grunt-electron-installer')

// 设置为默认
grunt.registerTask('default', ['create-windows-installer'])