import cartStore from "./../store/cartStore.js";
const { mapState } = Pinia;

export default {
  template: `    <div class="bg-light my-4 p-4">
    <div>購物車沒有任何品項</div><!--v-if-->
    <!--v-else-->
    <table class="table align-middle">
        <tbody>
            <tr>
                <td>
                    <a href="#" class="text-dark">X</a>
                </td>
                <td>
                    <img src="https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80" 
                    class="table-image"  alt="">
                </td>
                <td>好吃的餅乾</td>
                <td>
                    <select name="" id="" class="form-select">
                        <option value="1">1</option>                        </select>
                </td>
                <td class="text-end">
                    $100
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5" class="text-end">總金額 NT$ {{ cartList.total }}</td>
            </tr>
        </tfoot>
    </table>
</div>`,
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
};
