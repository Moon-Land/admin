import { fetchCard, createCard, patchCard, deleteCard } from "../../api/card";

export default {
  data() {
    return {
      subject$: "表格",
      rules$: {
        title: [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          },
          {
            validator(rule, val, cb) {
              console.log(rule, val);
              if (!val) {
                return cb(new Error("不能为空"));
              } else {
                return cb();
              }
            },
            trigger: "blur"
          }
        ],
        content: [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ],
        desc: []
      }
    };
  },
  methods: {
    create$: createCard,
    fetch$: fetchCard,
    modify$: patchCard,
    delete$: deleteCard
  }
};
