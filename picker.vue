<script>
    import DatePicker from 'iview/src/components/date-picker';
    import RangeYearPickerPanel from './panel';

    export default {
        mixins: [DatePicker],
        props: {
            type: {
                type: String,
                default: 'yearrange'
            },

            format: {
                type: String,
                default: 'yyyy'
            }
        },

        computed: {
            panel(){
               return 'RangeYearPickerPanel';
            }
        },

        components: {
            RangeYearPickerPanel
        },

        methods: {
            onSelectionModeChange(type){
                return this.selectionMode = 'year';
            },

            parseDate(val){
                if(!val){
                    val = [null, null];
                }else{
                    return val.map(date => new Date(`${date}-01-01`));
                }
            }
        }
    }
</script>