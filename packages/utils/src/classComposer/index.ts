export default function classComposer(...classes:any){
    return classes.filter(Boolean).join('');
}