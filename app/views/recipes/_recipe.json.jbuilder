json.extract! recipe, :id, :name, :ingredients, :instructions, :image_url, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
