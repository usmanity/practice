t = Time.new
$occuring_URLs = {}

File.open('sample.log', 'r') do |f|
  f.each_line do |line|
    split_line = line.partition(']').last
    url = split_line.match(/\/[\/*[a-z]*\/*]*/).to_s
    if $occuring_URLs[url] then
      $occuring_URLs[url] += 1
    else
      $occuring_URLs[url] = 1
    end
  end
end


popular_urls = $occuring_URLs.sort_by { |url, o| o }

popular_urls.reverse.each do |url|

  puts "#{url[0]} has been accessed #{url[1]} times"
end

puts "Time taken: #{Time.new - t} seconds"
