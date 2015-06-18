#
# Cookbook Name:: as_asset
# Recipe:: default
#
# Copyright 2015, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#

include_recipe 'yum-epel::default'
include_recipe 'yum-remi::default'

#gitインストール
yum_package 'git' do
  action :install
end

#nodejsインストール
yum_package 'nodejs' do
  action :install
end

#npmインストール
yum_package 'npm' do
  action :install
end

#基本ツールインストール
bash 'npm package install' do
  code <<-EOH
      sudo npm install -g bower
      sudo npm install -g grunt-cli
      sudo npm install -g tsd
      sudo npm install -g karma
      sudo npm install -g karma-jasmine
  EOH
end

