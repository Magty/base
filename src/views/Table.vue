<template>
  <div>
    <edit-table :columns="columns" @on-edit="handleEdit" v-model="tableData"></edit-table>
    <edit-table-multiply :columns="columns" @on-edit="handleEdit" v-model="tableData"></edit-table-multiply>
  </div>
</template>

<script>
import { getTableData } from '@/api/data'
import EditTable from '_c/edit-table'
import EditTableMultiply from '_c/edit-table-multiply'
export default {
  data() {
    return {
      tableData: [],
      columns: [
        { key: 'name', title: '姓名' },
        { key: 'age', title: '年龄', editable: true },
        { key: 'email', title: '邮箱', editable: true }
      ]
    }
  },
  components: {
    EditTable,
    EditTableMultiply
  },
  methods: {
    handleEdit({ row, index, column, newValue }) {
      console.log(row, index, column, newValue)
    }
  },
  mounted() {
    getTableData().then(res => {
      this.tableData = res
    })
  }
}
</script>

<style>
</style>
