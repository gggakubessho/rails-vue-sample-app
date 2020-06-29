json.array!(@tasklists) do |tasklist|
  json.id tasklist.id
  json.name tasklist.name
  json.items tasklist.tasks, :id, :name, :description, :tasklist_id
end
