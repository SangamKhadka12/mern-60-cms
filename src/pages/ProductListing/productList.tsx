import { NavLink } from "react-router"
export default function ProductList(){
    return <>
     <section className="flex p-5 bg-white w-full flex-col gap-5">


        <div className="flex w-full  overflow-y-scroll ">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-950 text-white">Thumbnail</th>
                <th className="border p-2 bg-gray-950 text-white">Product</th>
                <th className="border p-2 bg-gray-950 text-white">Category</th>
                <th className="border p-2 bg-gray-950 text-white">Brand</th>
                <th className="border p-2 bg-gray-950 text-white">Price</th>
                <th className="border p-2 bg-gray-950 text-white">Stock</th>
                <th className="border p-2 bg-gray-950 text-white">Rating</th>
                <th className="border p-2 bg-gray-950 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td className="border p-2 bg-white-950 text-black">..</td>
                  <td className="border p-2 bg-white-950 text-black">Nike Air Max 270</td>
                  <td className="border p-2 bg-white-950 text-black">Mens-Shoes</td>
                  <td className="border p-2 bg-white-950 text-black">Nike</td>
                  <td className="border p-2 bg-white-950 text-black">$150</td>
                  <td className="border p-2 bg-white-950 text-black">Out of Stock</td>
                  <td className="border p-2 bg-white-950 text-black">***</td>
                  <td className="border p-2 bg-white-950 text-black">
                  <NavLink className={'text-teal-700 underline text-sm'} 
                    to={'/admin/product/detail'}
                    >
                      View
                    </NavLink>
                     / Edit / Delete</td>
                </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
    }

