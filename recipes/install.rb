
include_recipe '::default'

#npmパッケージインストール
bash 'npm install' do
  code <<-EOH
      cd #{node[:asset][:root_path]}
      npm install
  EOH
end

#gruntインストール
bash 'grunt refresh' do
  code <<-EOH
      cd #{node[:asset][:root_path]}
      grunt refresh
  EOH
end

execute 'オーナー変更' do
  command "sudo chown -R #{node['asset']['maintenance']['user']}:#{node['asset']['maintenance']['group']} #{node[:asset][:root_path]}"
end
execute '権限変更' do
  command "sudo chmod -R 755 #{node[:asset][:root_path]}"
end
