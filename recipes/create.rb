
include_recipe '::default'

#rootディレクトリ作成
directory "#{node[:asset][:root_path]}" do
  user node['asset']['maintenance']['user']
  group node['asset']['maintenance']['group']
  mode '0775'
  action :create
  not_if { ::File.directory?("#{node[:asset][:root_path]}") }
end

#設定ファイルコピー
files = %w(package.json Gruntfile.js bower.json tsd.json)
files.each do |item|
  cookbook_file "#{node[:asset][:root_path]}/#{item}" do
    user node['asset']['maintenance']['user']
    group node['asset']['maintenance']['group']
    source "#{item}"
    not_if { ::File.exists?("#{node[:asset][:root_path]}/#{item}") }
  end
end

#各種ディレクトリ＆ファイル作成
directory "#{node[:asset][:root_path]}/typings_local/" do
  user node['asset']['maintenance']['user']
  group node['asset']['maintenance']['group']
  mode '0775'
  action :create
  not_if { ::File.directory?("#{node[:asset][:root_path]}/typings_local/") }
end
file "#{node[:asset][:root_path]}/typings_local/local.d.ts" do
  user node['asset']['maintenance']['user']
  group node['asset']['maintenance']['group']
  mode '0755'
  action :touch
  not_if { ::File.exists?("#{node[:asset][:root_path]}/typings_local/local.d.ts") }
end

directory "#{node[:asset][:root_path]}/test/" do
  user node['asset']['maintenance']['user']
  group node['asset']['maintenance']['group']
  mode '0775'
  action :create
  not_if { ::File.directory?("#{node[:asset][:root_path]}/test/") }
end
file "#{node[:asset][:root_path]}/test/.gitkeep" do
  user node['asset']['maintenance']['user']
  group node['asset']['maintenance']['group']
  mode '0755'
  action :touch
  not_if { ::File.exists?("#{node[:asset][:root_path]}/test/.gitkeep") }
end


include_recipe '::install'
