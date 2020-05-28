namespace :log_print_test do
    desc 'Task exemplo'
  task :log => :environment do
    puts "Task Called at #{Time.now}"
  end
end
