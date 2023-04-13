//3.如果想在qiankun的生命周期中做些处理，需要修改下入口文件
export const qiankun = {
  async mount(props: any) {
    console.log(props);
  },
  async bootstrap() {
    console.log("umi app bootstraped");
  },
  async afterMount(props: any) {
    console.log("umi app afterMount", props);
  },
};
