<template>
  <div>
    <vx-card>
      <div class="vx-row">
        <div class="vx-col md:w-1/2 w-full mt-5">
          <vx-timeline :data="timelineData" />
        </div>
        <div class="vx-col md:w-1/2 w-full mt-5">
          <vx-timeline :data="timelineData1" />
        </div>
      </div>
    </vx-card>
  </div>
</template>
<script>
import VxTimeline from "@/components/timeline/VxTimeline";
import axios from "axios";

export default {
  data() {
    return {
      timelineData1: [
        {
          color: "primary",
          icon: "ListIcon",
          title: "Diagnóstico",
          desc: "",
          time: "------------"
        },
        {
          color: "warning",
          icon: "WatchIcon",
          title: "Próxima Cita",
          desc: "",
          time: "------------"
        }
      ],
      timelineData: [
        {
          color: "primary",
          icon: "ListIcon",
          title: "Síntomas",
          desc: "",
          time: "------------"
        },
        {
          color: "warning",
          icon: "EyeIcon",
          title: "Observaciones",
          desc: "",
          time: "------------"
        }
      ]
    };
  },
  components: {
    VxTimeline
  },
  methods: {
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    getDiagnostic() {
      this.openLoading();
      let token = localStorage.getItem("tu");
      let id = this.$route.params.idPa;
      let idu = localStorage.getItem("ru");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getPaciente/" + id + '/' + idu,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          //console.log(Response);
          if (Response.data.length == 0) {
            this.activeLoading = false;
            this.$vs.loading.close();
            this.$vs.notify({
              title: "Atención",
              text: "Paciente no encontrado.",
              color: "warning"
            });
            this.$router.push("/listadoPacientes");
          } else {
            this.timelineData[0].desc = Response.data[0].symptom;
            this.timelineData[1].desc = Response.data[0].observations;
            this.timelineData1[0].desc = Response.data[0].diagnostics;
            this.timelineData1[1].desc = Response.data[0].nextAppointment;
            this.activeLoading = false;
            this.$vs.loading.close();
          }
        })
        .catch(err => {
          console.log(err);
          this.activeLoading = false;
          this.$vs.loading.close();
        });
    }
  },
  created() {
    this.getDiagnostic();
  }
};
</script>