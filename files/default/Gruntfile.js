module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: './bower_components_install',
                    layout: 'byComponent',
                    install: true,
                    verbose: true,
                    cleanTargetDir: true,
                    cleanBowerDir: false
                }
            }
        },
        tsd: {
            refresh: {
                options: {
                    command: 'reinstall',
                    latest: false,
                    config: './tsd.json',
                    opts: {
                    }
                }
            }
        },
        copy: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/',
                        src: 'jquery.js',
                        dest: 'web/lib/jquery/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery.cookie/',
                        src: 'jquery.cookie.js',
                        dest: 'web/lib/jquery.cookie/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/css/',
                        src: 'bootstrap.css',
                        dest: 'web/lib/bootstrap/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/js/',
                        src: 'bootstrap.js',
                        dest: 'web/lib/bootstrap/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/font-awesome/css/',
                        src: 'font-awesome.css',
                        dest: 'web/lib/font-awesome/css/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/font-awesome/fonts/',
                        src: '*',
                        dest: 'web/lib/font-awesome/fonts/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/underscore/',
                        src: 'underscore.js',
                        dest: 'web/lib/underscore/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/underscore.string/web/lib/',
                        src: 'underscore.string.js',
                        dest: 'web/lib/underscore.string/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/knockout/dist/',
                        src: 'knockout.debug.js',
                        dest: 'web/lib/knockout/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "knockout.js";
                        }
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/eventEmitter/',
                        src: 'EventEmitter.js',
                        dest: 'web/lib/eventEmitter/',
                        filter: 'isFile'
                    },
                    //jquery.validation
                    {
                        expand: true,
                        cwd: 'bower_components/jquery.validation/dist/',
                        src: 'jquery.validate.js',
                        dest: 'web/lib/jquery.validation/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery.validation/dist/',
                        src: 'additional-methods.js',
                        dest: 'web/lib/jquery.validation/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery.validation/src/localization/',
                        src: 'messages_ja.js',
                        dest: 'web/lib/jquery.validation/',
                        filter: 'isFile'
                    },
                    //blockui
                    {
                        expand: true,
                        cwd: 'bower_components/blockui/',
                        src: 'jquery.blockUI.js',
                        dest: 'web/lib/blockui/',
                        filter: 'isFile'
                    },
                    //kendoui
                    {
                        expand: true,
                        cwd: 'bower_components/kendoui/src/src/',
                        src: 'kendo.all.js',
                        dest: 'web/lib/kendoui/js/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/kendoui/styles/',
                        src: 'kendo.common.min.css',
                        dest: 'web/lib/kendoui/css/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + 'kendo.common.css';
                        }
                    }
                ]
            },
            prod: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/',
                        src: 'jquery.min.js',
                        dest: 'web/lib/jquery/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "jquery.js";
                        }
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery.cookie/',
                        src: 'jquery.cookie.min.js',
                        dest: 'web/lib/jquery.cookie/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "jquery.cookie.js";
                        }
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/css/',
                        src: 'bootstrap.min.css',
                        dest: 'web/lib/bootstrap/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "bootstrap.css";
                        }
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/js/',
                        src: 'bootstrap.min.js',
                        dest: 'web/lib/bootstrap/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "bootstrap.js";
                        }
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/font-awesome/css/',
                        src: 'font-awesome.min.css',
                        dest: 'web/lib/font-awesome/css/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "font-awesome.css";
                        }
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/underscore/',
                        src: 'underscore.min.js',
                        dest: 'web/lib/underscore/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "underscore.js";
                        }
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/underscore.string/dist/',
                        src: 'underscore.string.min.js',
                        dest: 'web/lib/underscore.string/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "underscore.string.js";
                        }
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/knockout/dist/',
                        src: 'knockout.js',
                        dest: 'web/lib/knockout/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/eventEmitter/',
                        src: 'EventEmitter.min.js',
                        dest: 'web/lib/eventEmitter/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "EventEmitter.js";
                        }
                    },
                    //jquery.validation
                    {
                        expand: true,
                        cwd: 'bower_components/jquery.validation/dist/',
                        src: 'jquery.validate.min.js',
                        dest: 'web/lib/jquery.validation/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "jquery.validate.js";
                        }
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery.validation/dist/',
                        src: 'additional-methods.min.js',
                        dest: 'web/lib/jquery.validation/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "additional-methods.js";
                        }
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery.validation/src/localization/',
                        src: 'messages_ja.js',
                        dest: 'web/lib/jquery.validation/',
                        filter: 'isFile'
                    },
                    //blockui
                    {
                        expand: true,
                        cwd: 'bower_components/blockui/',
                        src: 'jquery.blockUI.min.js',
                        dest: 'web/lib/blockui/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + "jquery.blockUI.js";
                        }
                    },
                    //kendoui
                    {
                        expand: true,
                        cwd: 'bower_components/kendoui/js/',
                        src: 'kendo.all.min.js',
                        dest: 'web/lib/kendoui/js/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + 'kendo.all.js';
                        }
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/kendoui/styles/',
                        src: 'kendo.common.min.css',
                        dest: 'web/lib/kendoui/css/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + 'kendo.common.css';
                        }
                    }
                ]
            }
        },
        uglify: {
            lib: {
                files: {
                    'bower_components/underscore/underscore.min.js': ['bower_components/underscore/underscore.js'],
                    'bower_components/jquery.cookie/jquery.cookie.min.js': ['bower_components/jquery.cookie/jquery.cookie.js'],
                    'bower_components/blockui/jquery.blockUI.min.js': ['bower_components/blockui/jquery.blockUI.js']
                }
            }
        },
        //protractor設定
        protractor: {
            options: {
                keepAlive: true,
                noColor: false
            },
            my_target: {
                options: {
                    configFile: "config/protractor.conf.js"
                }
            }
        },
        //テスト用Webサーバー設定
        connect: {
            options: {
                port: 9000,
                hostname: '*'
            },
            my_target: {
                options: {
                    base: 'web/'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-tsd');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-connect');

    //task
    grunt.registerTask('refresh', '関連ファイルを再インストールする', function() {
        grunt.task.run(['bower:install', 'copy:dev', 'tsd:refresh']);
    });
    grunt.registerTask('lib-dev', 'JSライブラリ(minify無し)をwebフォルダにインストールする。', function() {
        grunt.task.run(['bower:install', 'copy:dev']);
    });
    grunt.registerTask('lib-prod', 'JSライブラリ(minify済み)をwebフォルダにインストールする。', function() {
        grunt.task.run(['bower:install', 'uglify:lib', 'copy:prod']);
    });

};