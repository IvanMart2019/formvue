<template>
  <div class="form">

    <form @submit.prevent="submitHandle">

      <h2>Расскажите о себе:</h2>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input1">Фамилия</label>
          <input type="text"  v-model.lazy="$v.second_name.$model"  id="Input1">
        </div>
        <small  v-if="$v.second_name.$dirty && !$v.second_name.minLength">Фамилия должна иметь больше 2 букв</small>
        <small  v-else-if="$v.second_name.$dirty && !$v.second_name.required">Укажите фамилию</small>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input2">Имя</label>
          <input type="text"  v-model.lazy="$v.name.$model"  id="Input2">
        </div>
        <small  v-if="$v.name.$dirty && !$v.name.minLength">Имя должно иметь больше 2 букв</small>
        <small  v-else-if="$v.name.$dirty && !$v.name.required">Укажите имя</small>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input3">Отчество</label>
          <input type="text"  v-model="patronymic"  id="Input3">
        </div>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input4">Дата рождения</label>
          <input type="date" value="2012-06-01" v-model.lazy="$v.date_foundation.$model"  id="Input4" max="2020-01-01" min="1950-01-01">
        </div>
        <small  v-if="$v.date_foundation.$dirty && !$v.date_foundation.required">Укажите дату рождения</small>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input5">Телефон</label>
          <input  type="number"  v-model.lazy="$v.telephone.$model"  id="Input5">
        </div>
        <small  v-if="$v.telephone.$dirty && !$v.telephone.minLength">Номер должен состоять из 11 цифр</small>
        <small  v-else-if="$v.telephone.$dirty && !$v.telephone.required">Укажите номер телефна</small>
        <small  v-if="telephoneValNum">Номер телефна должне наченаться с цифры 7</small>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <b>Пол</b> 
          <div class="gender">
            <label for="Input6">Муж</label>
            <input type="radio" id="Input6" value="men" v-model="gender">

            <label for="Input7">Жен</label>
            <input type="radio" id="Input7" value="female" v-model="gender">
          </div>
        </div>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input8">Сегмент</label>
          <select  v-model.lazy="$v.segment.$model" id="Input8" >
            <option value="1" selected="selected">VIP</option>
            <option value="2">Проблемные</option>
            <option value="3">ОМС</option>
          </select>
        </div>
        <small  v-if="$v.segment.$dirty && !$v.segment.required">Укажите к какому сегменту относится клиент</small>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input9">Лечащий врач</label>
          <select  v-model="attending_doctor" id="Input9" >
            <option value="1" selected="selected">Иванов</option>
            <option value="2">Захаров</option>
            <option value="3">Чернышева</option>
          </select>
        </div>
      </div>

      <div class="form__field">
        <div class="form__wrap">
          <label for="Input10">Отправлять СМС оповещения</label>
          <input type="checkbox"  v-model="send_sms"  id="Input10">
        </div>
      </div>

      <h2>Адрес:</h2>

      <div class="form__field">
        <div class="form__wrap">
          <label for="Input11">Почтовый индекс</label>
          <input type="text"  v-model="index"  id="Input11">
        </div>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input12">Страна</label>
          <input type="text"  v-model="country"  id="Input12">
        </div>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input13">Область</label>
          <input type="text"  v-model="region"  id="Input13">
        </div>
      </div>
     <div class="form__field">
        <div class="form__wrap">
          <label for="Input14">Город</label>
          <input type="text"  v-model.lazy="$v.city.$model"  id="Input14">
        </div>
        <small  v-if="$v.city.$dirty && !$v.city.required">Укажите город</small>
     </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input15">Улица</label>
          <input type="text"  v-model="street"  id="Input15">
        </div>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input16">Дом</label>
          <input type="text"  v-model="hose"  id="Input16">
        </div>
      </div>

      <h2>Документы</h2>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input17">Документ</label>
            <select  v-model.lazy="$v.document.$model" id="Input17" >
            <option value="1" selected="selected">Паспорт</option>
            <option value="2">Свидетельство о рождении</option>
            <option value="3">Driver's license</option>
          </select>
        </div>
        <small  v-if="$v.document.$dirty && !$v.document.required">Укажите тип документа</small>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input18">Улица</label>
          <input type="text"  v-model="street"  id="Input18">
        </div>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input19">Номер</label>
          <input type="text"  v-model="number_document"  id="Input19">
        </div>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input20">Кем выдан</label>
          <input type="text"  v-model="issued_by"  id="Input20">
        </div>
      </div>
      <div class="form__field">
        <div class="form__wrap">
          <label for="Input21">Дата выдачи</label>
          <input type="date" value="2019-06-01" v-model.lazy="$v.date_of_issue.$model"  id="Input21" max="2020-01-01" min="2010-01-01">
        </div>
        <small  v-if="$v.date_of_issue.$dirty && !$v.date_of_issue.required">Укажите дату выдачи</small>
      </div>
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Form',
  data () {
    return {
      name: '',
      second_name: '',
      patronymic: '',
      date_foundation:"",
      date_of_issue:"",
      telephone: 0,
      gender: '',
      segment: '1',
      attending_doctor: '',
      send_sms: true,
      index: '',
      country: '',
      region: '',
      city: '',
      street: '',
      hose: '',
      document: '1',
      issued_by: '',
      number_document: '',
      telephoneValNum: false,
      age: 0
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    second_name: {
      required,
      minLength: minLength(2)
    },
    date_foundation: {
      required
    },
    telephone: {
      required,
      minLength: minLength(11)
    },
    city: {
      required
    },
    segment: {
      required
    },
    document: {
      required
    },
    date_of_issue: {
      required
    },
  },
  methods: {
    submitHandle() {      
      if(this.$v.$invalid) {
        this.$v.$touch();
        return    
      }
      else {
          // номер телефона начинается с цифры 7
          if (7 != this.telephone.toString().charAt(0)) {
            this.telephoneValNum = true
            return 
          }
          else {
            this.telephoneValNum = false
          }

        alert(" Новый клиент успешно создан...")
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

  $gray: #cecece
  $light-gray: #F6F6f6
  $red: #9a1717
  $white: #fff

  .form
    max-width: 700px
    margin: 0 auto
    padding: 50px 0

  form
    text-align: initial
  h2
    padding: 20px
    margin: 0
    margin-top: 50px
    font-size: 30px

  small
    display: block
    width: 100%
    padding: 10px
    font-size: 15px
    background: $red
    color: $white
    border-radius: 5px
    margin-bottom: 30px
  .form__field
    padding: 10px 20px
    box-sizing: border-box
  .form__wrap
    display: flex
    justify-content: space-between
    margin-bottom: 10px

  .gender
    width: 70%
  #Input6
    margin-right: 50%
  // delete focus
  button:active, button:focus 
    outline: none
  input:active, input:focus 
    outline: none
  label
    margin-top: 10px
  input:-internal-autofill-selected
    background: none
  input
    max-width: 400px
    font-size: 13px
    padding: 10px 0 10px 10px
    border: 1px solid $gray
    background: $light-gray
    border-radius: 5px

  input[type="date"]
    width: 180px
    font-size: 13px
    padding: 10px 0 10px 10px
    border: 1px solid $gray
    background: $light-gray
    border-radius: 5px
    font: 15px Calibri
    cursor: pointer
    box-sizing: border-box
  input[type="checkbox"]
    width: 20px
    height: 20px
    cursor: pointer
  select
    font-size: 13px
    padding: 10px 0 10px 10px
    border: 1px solid $gray
    background: $light-gray
    border-radius: 5px
  .radio 
    display: block
    height: 25px
    background-position: 0 -56px
    color: $light-gray
    cursor: pointer
    text-indent: 22px
    font-size: 13px
  button
    border: 1px solid $gray
    background: $light-gray
    padding: 15px 30px
    border-radius: 5px
    width: 100%
    margin-top: 50px
    cursor: pointer
    margin-bottom: 20px
    &:hover
      background: $gray
      color: $light-gray
  .radio.active 
    background-position: 0 -86px
  
  @media only screen and (max-width: 500px) 
    .form__wrap
        display: block
    input
      width: 100%
      display: block
      margin-top: 10px
    select
      width: 100%
      display: block
      margin-top: 10px
    input[type="date"]
      width: 100%
      display: block
      box-sizing: content-box
      margin-top: 10px
    .gender
      width: 100%
      display: flex
      margin-top: 10px
</style>
