namespace :log_print_test do
    desc 'Chama o método teste definido no model do Borrowing'
  task :log => :environment do
    puts "Task Called at #{Time.now}"
  end
end
