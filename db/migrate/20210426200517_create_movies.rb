class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :director
      t.string :info
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
