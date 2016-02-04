# // May need to just look for last element, create a loop
# // https://stackoverflow.com/questions/18869004/how-do-i-scrape-html-between-two-html-comments-using-nokogiri
# // 
# // // scrape until: Member of the State Board of Education 8 Year Terms (2) Positions

require 'nokogiri'

doc = File.open("./2012_mich_elet/2012_Mich_election.html") { |f| Nokogiri::HTML(f) }
# (<<EOT)
# <body>
# <!-- begin content -->
#  <div>some text</div>
#  <div><p>Some more elements</p></div>
# <!-- end content -->
# </body>
# EOT
# 
start_comment = doc.at("//comment()[contains(.,'begin content')]")

content = Nokogiri::XML::NodeSet.new(doc)
contained_node = start_comment.next_sibling
loop do
  break if contained_node.comment?
  content << contained_node
  contained_node = contained_node.next_sibling
end

content.to_html 