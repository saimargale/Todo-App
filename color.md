<!-- add button -->
<button onClick={handleAdd} disabled={todo.length <= 3} className='bg-[#3AB5FF] text-[#FFFFFF] hover:bg-[#00FF88] p-4 py-2 text-sm rounded-md mx-6 font-bold'>Add</button>

<!-- edit and delete buttons -->
<button onClick={(e) => handleEdit(e, item.id)} className='bg-[#3AB5FF] text-[#FFFFFF] hover:bg-[#00FF88] p-4 py-2 text-sm rounded-md mx-1 font-bold'>Edit</button>
<button onClick={(e) => { handleDelete(e, item.id) }} className='bg-[#3AB5FF] text-[#FFFFFF] hover:bg-[#00FF88] p-4 py-2 text-sm rounded-md mx-1 font-bold'>Delete</button>