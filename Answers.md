`<!-- Answer 1 -->`
Explaination of relation between "Product" and "Product_Category" entities in the diagram provided;

**Entities**;
**Product**
Represents items, within the system with characteristics like 
{`id`, `name`, `desc`, `SKU`, `category_id`, `inventory_id`, `price` and `discount_id`}

**Product_Category**
Represents product categories with attributes such as 
{`id` `name` and `desc`}

**Connection**;
The relationship between these entities is established through a connection using a * key**.
The `category_id` attribute in the **Product** entity acts as key that points to the corresponding categorys `id` attribute, in the **Product_Category** entity.
This setup ensures that each product is linked to a category by matching its `category_id` with the categorys identifier.

Example : 
Lets consider a scenario, with a product called "Running Shoes" labeled with ID 101 in our system. If these "Running Shoes" fall under the "Footwear" category identified by ID 1 their category ID will be assigned as 1. This action establishes a connection between the product "Running Shoes" and the category "Footwear."

`<!-- Answer 2 -->`
To ensure that each product in the **"Product"** table has a valid category assigned to it, we can use Mongoose's built-in validation method.

Using Mongoose's populate() method along with schema validation to ensure that the **category_id** field references a valid category in the **"ProductCategorySchema"** collection.

=> The **category_id** field is marked as required.
=> The ProductSchema is configured to validate the category_id field using Mongoose's `validate()` method.
=> Inside the validation function, it queries the "ProductCategorySchema" collection to check if the referenced category exists. If it does, the validation passes.
Otherwise, it fails with the error message `'Invalid category ID'`.

With these changes, each product inserted into the "Product" table will be required to have a valid category assigned to it.
If an invalid category ID is provided, the validation will fail, preventing the insertion of the product into the database.
